import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {UpdateAllergiesCommand} from "./update-allergies.command";
import {Promise} from "mongoose";
import {CamperEntityRepository} from "../../db/camper-entity.repository";

@CommandHandler(UpdateAllergiesCommand)
export class UpdateAllergiesHandler implements ICommandHandler<UpdateAllergiesCommand> {
    constructor(
        private readonly r:CamperEntityRepository
    ) {

    }

    async execute({camperId, allergies}: UpdateAllergiesCommand): Promise<void> {
        return Promise.resolve(undefined);
    }
}