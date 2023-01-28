import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Client from './Client';

export default class ClientMessageSender {
    private client: Client;
    
    public Init(client: Client)
    {
        this.client = client;
    }
    
    
}