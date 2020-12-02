import { WebPlugin } from "@capacitor/core";
import { ContactsPlugin, PermissionStatus, Contact } from "./definitions";
export declare class ContactsPluginWeb extends WebPlugin implements ContactsPlugin {
    constructor();
    getPermissions(): Promise<PermissionStatus>;
    getContacts(): Promise<{
        contacts: Contact[];
    }>;
}
declare const Contacts: ContactsPluginWeb;
export { Contacts };
