import { jobTemplate } from './job-search-templates.js';
import { getCurrencySymbol, extractFormData } from './job-search-utils.js';

export class JobSearch {
    constructor(searchFormSelector, resultsContainerSelector) {
        this.searchForm = document.querySelector(searchFormSelector);
        this.resultsContainer = document.querySelector(resultsContainerSelector);
    }

    setCountryCode() {
        this.countryCode = 'us';
        this.setCurrencySymbol();

        fetch('http://ip-api.com/json')
        //fetch('http://ip-api.com/json/?fields=61439')
            .then(results => results.json())
            .then(results => {
                this.countryCode = results.countryCode.toLowerCase();
                this.setCurrencySymbol();
            });
    }

    setCurrencySymbol() {
        this.currencySymbol = getCurrencySymbol(this.countryCode);
    }

    configureFormListener() {
        this.searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.resultsContainer.innerHTML = '';
            const  { search, location } = extractFormData(this.searchForm);
// Fetch request post method with Brian work
            fetch('/api/jobsearch', {
                method: 'POST',
                body: JSON.stringify({ search, location, countryCode:this.countryCode }),
                headers: { 'Content-Type': 'application/json' },
            })
                .then(response =>
                    {
                        console.log(response.json())
                        return response.json()
                    })
                .then(({ results }) => {
                    return results
                        .map(job => jobTemplate(job, this.currencySymbol))
                        .join('');
                })
                .then(jobs => this.resultsContainer.innerHTML = jobs);
        });
    }
}