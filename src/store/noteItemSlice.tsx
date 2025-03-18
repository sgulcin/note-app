import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosConfig';

interface NoteItem {
  _id: number | null;
  title: string;  
  date: string;
  content?: string;
}

interface NoteItemState {
  items: NoteItem[];
  activeNoteId: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: NoteItemState = {
  items: [],
  activeNoteId: null,
  loading: false,
  error: null,
};

export const fetchNotes = createAsyncThunk<NoteItem[]>(
  'noteItem/fetchNotes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/notes');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch notes');
    }
  }
);

const noteItemSlice = createSlice({
  name: 'noteItem',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteItem>) => {
      state.items.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(note => note._id !== action.payload);
    },
    updateNote: (state, action: PayloadAction<NoteItem>) => {
      const index = state.items.findIndex(note => note._id === action.payload._id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    setActiveNote: (state, action: PayloadAction<number|null>) => {
      state.activeNoteId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        console.log('Fetched notes:', action.payload);  
        state.activeNoteId = action.payload[0]?.["_id"];
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addNote, removeNote, updateNote, setActiveNote } = noteItemSlice.actions;
export default noteItemSlice.reducer;