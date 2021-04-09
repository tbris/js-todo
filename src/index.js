import flatpickr from 'flatpickr';
import '../node_modules/flatpickr/dist/themes/confetti.css';
import './scss/index.scss';

import './formProject';
import './formTodo';
import './domSidebar';
import './domSort';

import { batchAppendProject } from './domProject';
import { storageInit, retrieveData } from './storage';
import { DefaultProject } from './domUtilities';

if (!retrieveData()) storageInit(DefaultProject.initialize());

batchAppendProject();
DefaultProject.element().click();

flatpickr('[name="todoDate"]', {
  altInput: true,
  altFormat: 'D M j, Y, h:i K',
  minDate: 'today',
  enableTime: true,
});
