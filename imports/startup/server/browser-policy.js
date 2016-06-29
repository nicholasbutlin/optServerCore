// TODO: Permissions:  Browser Policy
import { BrowserPolicy } from 'meteor/browser-policy-common';
BrowserPolicy.content.allowSameOriginForAll();
BrowserPolicy.content.allowOriginForAll('*.s3.amazonaws.com');
BrowserPolicy.content.allowOriginForAll('apis.google.com');
