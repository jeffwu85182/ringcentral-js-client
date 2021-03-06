// Generated Source

interface SyncInfoMessages {

    /**
     * Type of synchronization
     */
    syncType?: "FSync" | "ISync";

    /**
     * Synchronization token
     */
    syncToken?: string;

    /**
     * Last synchronization datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    syncTime?: string;
}

export default SyncInfoMessages;
