<style lang="scss">
.change-array {
    font-size: 16px;
    h2 {
        text-align: center;
    }
    p {
        display: flex;
    }
}
.not-change-array {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    h2 {
        text-align: center;
    }
    p {
        display: flex;
        justify-content: flex-start;
    }
}
.trasverse-array {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    h2 {
        text-align: center;
    }
    p {
        display: flex;
        justify-content: space-between;
    }
}
.first {
    display: flex;
    justify-content: space-between;
    // align-items: center; //felx-satrt center use fro vertical
    align-content: stretch;
    align-self: center;
    flex-wrap: wrap;
}
</style>
<template>
    <div class="first">
        <h1>all array function</h1>
        <div class="change-array">
            <h2>can change origin array</h2>
            <a-button type="error">can change origin array</a-button>
            <p>pop</p>
            <p>push</p>
            <p>shift</p>
            <p>unshift</p>
            <p>reverse</p>
            <p>sort</p>
            <p>solice</p>
            <p>copywith</p>
            <p>fill</p>
            <p>splice=> return a deleted array</p>
            <p></p>
        </div>
        <div class="not-change-array">
            <h2>not change origin array</h2>
            <p>concat</p>
            <p>join</p>
            <p>slice =>copy</p>
            <p>toString</p>
            <p>tolocalstring</p>
            <p>indexOf</p>
            <p>lastindexof</p>
            <p>includes</p>
            <p>tosource</p>
        </div>
        <div class="trasverse-array">
            <h2>trasverse array</h2>
            <p>forEach</p>
            <p>every =>true/false</p>
            <p>some =>true/false</p>
            <p>filter =>return array conform this condition</p>
            <p>map return new array</p>
            <p>reduce return new array</p>
            <p>reduceRight return new array</p>
            <p>entries return an iterator array object</p>
            <p>find</p>
            <p>findIndex</p>
            <p>arr.keys</p>
            <p>values</p>
            <p>symbol.iterator</p>
        </div>
        <div>
            <h1>object</h1>
            <ol>
                <li>charAt</li>
                <li>charCodeAt</li>
                <li>concat</li>
                <li>match</li>
                <li>replace</li>
                <li>search</li>
                <li>slice</li>
                <li>split</li>
                <li>toLocalLowerCase/toLowerCase</li>
                <li>toLocalUpperCase/toUpperCase</li>
                <li>substr</li>
                <li>subString</li>
            </ol>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Array',
    components: {},
    data() {
        /**
         * can define some logic function to do
         * such as
         */
        const a = (params) => {
            if (params === 0) {
                console.log(1)
                return params
            }
        }
        return {
            a: a,
        }
    },
}
</script>
