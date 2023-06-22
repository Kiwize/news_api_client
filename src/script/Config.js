const URL = "http://localhost:8700";
const DEFAULT_LOCALE = "fr"
const RESULTS_PER_PAGE = 20

export class Configuration {
    static get URL() {
        return URL;
    }

    static get DEFAULT_LOCALE() {
        return DEFAULT_LOCALE;
    }

    static get RESULTS_PER_PAGE() {
        return RESULTS_PER_PAGE;
    }
}