<template>
    <div class="section">
        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-1">
                    <div class="tile">
                        <div class="tile is-partent is-vertical">
                            <article class='tile is-child notification is-info'>
                                <p class='title'>出勤退勤休憩</p>
                            </article>
                            <article class="tile is-child notification is-danger">
                                <div class="column is-half">
                                    <div class="field is-grouped">
                                        <button
                                            class="button is-info is-focused control"
                                            @click="enter"
                                        >出勤</button>
                                        <button
                                            class="button is-success is-focused control"
                                            @click="rest"
                                        >休憩</button>
                                        <button
                                            class="button is-primary is-focused control"
                                            @click="leave"
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

export default Vue.extend({
    name: "home",
    data() {
        return {
            USER_SERVICE_UUID: "28074804-781c-4c26-8783-24dabfa139a1",
            LED_CHARACTERISTIC_UUID: "E9062E71-9E62-4BC6-B0D3-35CDCD9B027B",
            SLACK_WEBHOOK_URL: "",
            bleConnect: false,
            bleStatus: "Await Connecting A Device...",
            members: {
                kawase: ""
            }
        };
    },
    methods: {
        async slackPost() {},
        async liffCheckAvailabilityAndDo(callback) {
            try {
                const isAbailable = await window.liff.bluetooth.getAvailability();
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
            const device = await window.liff.bluetooth.requestDevice();
            await device.gatt.connect();
            // const service = await device.gatt.getPrimaryService(this.USER_SERVICE_UUID)
            // window.ledCharacteristic = await service.getCharacteristic(this.LED_CHARACTERISTIC_UUID)
            this.bleConnect = true;
            this.bleStatus = "Connected to the device.";
        },
        async initializeLiff() {
            await window.liff.initPlugins(["bluetooth"]);
            this.liffCheckAvailabilityAndDo(() => this.liffRequestDevice());
            const profile = await window.liff.getProfile();
            // TODO
        },
        canUseLiff() {
            return navigator.userAgent.indexOf("Line") !== -1 && window.liff;
        },
        enter() {
            alert("enter");
        },
        rest() {
            alert("rest");
        },
        leave() {
            alert("leave");
        }
    },
    mounted() {
        if (!this.canUseLiff()) alert('can not use.'); return;
        window.liff.init(
            () => this.initializeLiff(),
            error => (location.href = "https://google.co.jp")
        );
    }
});
</script>
