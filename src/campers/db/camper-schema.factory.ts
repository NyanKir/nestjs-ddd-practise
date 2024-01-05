import {Injectable} from "@nestjs/common";
import {EntitySchemaFactory} from "../../database/entity-schema.factory";
import {CamperSchema} from "./camper.schema";
import {Camper} from "../Camper";
import {ObjectId} from "mongodb";

@Injectable()
export class CamperSchemaFactory implements EntitySchemaFactory<CamperSchema, Camper> {
    constructor() {
    }

    create(camper: Camper): CamperSchema {
        return {
            _id: new ObjectId(camper.getId()),
            name: camper.getName(),
            age: camper.getAge(),
            allergies: camper.getAllergies(),
        };
    }

    createFromSchema(schema: CamperSchema): Camper {
        return new Camper(
            schema._id.toHexString(),
            schema.name,
            schema.age,
            schema.allergies
        )
    }
}