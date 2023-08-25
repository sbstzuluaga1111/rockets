import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
export enum AstronautaTipo{
    comandante = "comandante",
    tripulante = "tripulante",
}

@Schema()
export class Astronauta{
    @Prop({required: true})
    nombre: string;
    @Prop({required: true})
    mision: string;
    @Prop({default: AstronautaTipo.tripulante})
    tipo: AstronautaTipo;
}

export const AstronautaSchema = SchemaFactory.createForClass(Astronauta);