// src/features/actions.js
import { createAction } from '@reduxjs/toolkit';

export const submitTopic = createAction('ui/submitTopic');
export const submitInputPage = createAction('ui/submitInputPage');
export const validateTopic = createAction('validate/validateTopic');
