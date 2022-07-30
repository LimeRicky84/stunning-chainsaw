import { JobSearch } from './JobSearch.js';

const jobSearch = new JobSearch('#search-form', '.result-container');
jobSearch.setCountryCode();
jobSearch.configureFormListener();