export module Utils {
    export function sortBy(key: string) {
        return (value1, value2) => {
            if(value1[key] < value2[key]) return -1;
            if(value1[key] > value2[key]) return 1;
            return 0;
        };
    }
}