import {Expose, Transform, Type} from "class-transformer";
import {IsDefined} from "class-validator";
import {DateTime} from 'luxon';
import {isoStringToDateTime} from "../../../utils";

export class BackendStuffMeta {
    constructor(param: Partial<BackendStuffMeta> = {}) {
        Object.assign(this, param);
    }

    @Expose({name: 'updated_at'})
    @Transform(isoStringToDateTime())
    updatedAt?: DateTime;

    @Expose({name: 'created_at'})
    @Transform(isoStringToDateTime())
    createdAt?: DateTime;

    @Expose({name: 'is_enabled'})
    isEnabled?: boolean;

    // IsDefined is for checking when posting, but programmatically we should be catious of its absence
    @IsDefined()
    id?: string;
}

export class BackendStuff {
    constructor(param: Partial<BackendStuff> = {}) {
        Object.assign(this, param);
    }

    @Type(() => BackendStuffMeta)
    meta?: BackendStuffMeta;

    data?: string;

    tag?: string;
}