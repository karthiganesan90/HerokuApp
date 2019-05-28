import { DeliveryMessageAttributes } from "../types";
import { get } from "lodash";

export class DeliveryMessage{

    private _id?: string;
    private _message?: string;
    private _localId?: string;

    constructor(attributes: DeliveryMessageAttributes){
        const { id, message, localId } = attributes;
        this._id = id;
        this._message = message;
        this._localId = localId;
    }

    get id(): string | undefined{
        return this._id;
    }

    get message(): string | undefined{
        return this._message;
    }

    get localId(): string | undefined{
        return this._localId;
    }

    set id(id: string | undefined){
        this._id = id;
    }

    set message(message: string | undefined){
        this.message = message;
    }

    set localId(localId: string | undefined){
        this._localId = localId;
    }

    static createAttributesFromResponse: (
        response: any
      ) => DeliveryMessage = response => {
        return {
          id: get(response, 'id'),
          message: get(response, 'message'),
          localId: get(response, 'localId'),
        };
      };
}