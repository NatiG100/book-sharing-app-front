import {MeiliSearch} from 'meilisearch';
import { API_MEILISEARCH } from './constants/API_URL';

export const meilisearchClient = new MeiliSearch({
    host:API_MEILISEARCH,
})