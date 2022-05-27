import Speaker from "./Speaker";

export default interface Presentation {
  presentation: string;
  details: string;
  room: number;
  speaker: Speaker;
}