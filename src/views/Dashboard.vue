<template>
    <div class="dashboard">
        <main-layout>
            <content-header text="Dashboard"></content-header>

            <main-layout-content>
                <boxes>
                    <boxes-row>
                        <box>
                            <content-header text="Box">
                            </content-header>
                            <box-content>
                                <p>
                                    Something cool.
                                </p>
                            </box-content>
                        </box>
                    </boxes-row>
                    <boxes-row>
                        <box text="Box">
                            Something cool.
                        </box>
                        <box text="Box">
                            Something cool.
                        </box>
                    </boxes-row>
                    <boxes-row>
                        <box text="Box">
                            Something cool.
                        </box>
                    </boxes-row>
                    <boxes-row>
                        <box text="Box">
                            Something cool.
                        </box>
                        <box text="Box">
                            Something cool.
                        </box>
                    </boxes-row>
                    <boxes-row>
                        <box text="Box">
                            Something cool.
                        </box>
                        <box text="Box">
                            Something cool.
                        </box>
                    </boxes-row>
                </boxes>
            </main-layout-content>
        </main-layout>
    </div>
</template>
<script lang="ts" src="./Dashboard.ts"></script>
<style scoped lang="scss" src="./Dashboard.scss"></style>
