<template>
    <div class="section">
        <div class="pageloader"></div>
        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-1">
                    <div class="tile">
                        <div class="tile is-partent is-vertical">
                            <article class='tile is-child notification is-info'>
                                <p class='title'>アトリエ秋葉原勤怠</p>
                            </article>
                            <article class="tile is-child notification is-danger">
                                <div class="column is-half">
                                    <div class="field is-grouped">
                                        <button
                                            class="button is-info is-focused control"
                                            :class="{'is-loading': this.loading}"
                                            @click="startWork"
                                            :disabled="loading"
                                        >出勤</button>
                                        <button
                                            class="button is-success is-focused control"
                                            :class="{'is-loading': this.loading}"
                                            @click="startRest"
                                            :disabled="loading"
                                        >休憩</button>
                                        <button
                                            class="button is-warning is-focused control"
                                            :class="{'is-loading': this.loading}"
                                            @click="finishRest"
                                            :disabled="loading"
                                        >戻り</button>
                                        <button
                                            class="button is-primary is-focused control"
                                            :class="{'is-loading': this.loading}"
                                            @click="finishWork"
                                            :disabled="loading"
                                        >退勤</button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import "bulma/css/bulma.css";
import axios from 'axios';
import { Promise } from "q";

export default Vue.extend({
    name: "home",
    data() {
        return {
            USER_SERVICE_UUID: "b7ea8954-0def-4aca-851e-612dc2d6ce2e",
            LED_CHARACTERISTIC_UUID: "E9062E71-9E62-4BC6-B0D3-35CDCD9B027B",
            bleConnect: false,
            bleStatus: "Await Connecting A Device...",
            userId: null,
            loading: false
        };
    },
    methods: {
        async slackPost(text) {
            try {
                const options = {
                    method: 'post',
                    baseURL: 'https://hooks.slack.com/services/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',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    data: {
                        text: text
                    }
                }
                await axios.request(options);
            } catch(e) {
                alert('エラーが発生しました。', e);
            }
        },
        async spreadsheetPost(text) {
            try {
                const options = {
                    method: 'post',
                    baseURL: 'https://script.google.com/macros/s/AKfycbxHZl43hpSYjynZAUnnA7IYpV2mO3B_eFGkhVLtqYOo-5T-uXOE/exec',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    data: {
                        id: this.userId,
                        text: text
                    }
                }
                await axios.request(options);
            } catch(e) {
                alert('エラーが発生しました。', e);
            }
        },
        async liffCheckAvailabilityAndDo(callback) {
            try {
                const isAbailable = await liff.bluetooth.getAvailability();
                if (isAbailable) {
                    callback();
                } else {
                    this.bleStatus = "Switch bluetooth on.";
                    setTimeout(
                        () => this.liffCheckAvailabilityAndDo(callback),
                        10000
                    );
                }
            } catch (error) {
                alert("Switch bluetooth on.");
            }
        },
        async liffRequestDevice() {
            const device = await liff.bluetooth.requestDevice();
            await device.gatt.connect();
            // const service = await device.gatt.getPrimaryService(this.USER_SERVICE_UUID)
            // window.ledCharacteristic = await service.getCharacteristic(this.LED_CHARACTERISTIC_UUID)
            this.bleConnect = true;
            this.bleStatus = "Connected to the device.";
        },
        async initializeLiff() {
            await liff.initPlugins(["bluetooth"]);
            this.liffCheckAvailabilityAndDo(() => this.liffRequestDevice());
            const profile = await liff.getProfile();
            this.userId = profile.userId;
        },
        async post(text, status) {
            if (!this.userId) {
                alert('User not found.');
                return;
            };
            this.loading = true;
            Promise.all([this.slackPost(`${this.userId}が${text}`), this.spreadsheetPost(status)])
            .then((res) => {
                alert(text, res);
            })
            .catch((e) => alert('失敗しました。', e))
            .finally(() => this.loading = false);
        },
        async startWork() {
            const text = '出勤しました。';
            const status = 'startWork';
            await this.post(text, status);
        },
        async startRest() {
            const text = '休憩に入りました。';
            const status = 'startRest';
            await this.post(text, status);
        },
        async finishRest() {
            const text = '休憩から戻りました。';
            const status = 'finishRest';
            await this.post(text, status);
        },
        async finishWork() {
            const text = '退勤しました。';
            const status = 'finishWork';
            await this.post(text, status);
        }
    },
    mounted() {
        liff.init(
            () => this.initializeLiff(),
            error => (location.href = "https://google.co.jp")
        );
    }
});
</script>
