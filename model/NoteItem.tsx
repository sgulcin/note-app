import mongoose, { Document, Schema } from 'mongoose';

export interface INote extends Document {
  title: string;
  date: string;
  content?: string;
}

const NoteSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    content: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<INote>('Note', NoteSchema);