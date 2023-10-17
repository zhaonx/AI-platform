<template>
    <el-config-provider namespace="ep">
        <div class="common-layout">
            <el-container>
                <el-header></el-header>
                <el-container>
                    <el-aside width="400px">

                    </el-aside>
                    <el-main>
                        <HelloWorld msg="铁四院AI平台" />
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </el-config-provider>
</template>

<style>
    .el-main {
        height: 100%; /* 设置el-main的高度为100% */
        overflow-y: auto; /* 仅在y轴方向上显示滚动条，根据内容超出el-main的部分显示滚动条 */
    }
</style>