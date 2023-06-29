import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/*
 * GET @ /boards
 * headers: Authorization: Bearer token
 */
export const fetchBoards = createAsyncThunk(
    'boards/fetchBoards',
    async (_, thunkAPI) => {
      try {
        const res = await axios.get('/boards');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

/*
 * POST @ /boards
 * headers: Authorization: Bearer token
 */
  export const addBoard = createAsyncThunk(
    'boards/addBoard',
    async (body, thunkAPI) => {
      try {
        const response = await axios.post('api/contacts', { ...body });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


  /*
 * PUT @ /boards
 * headers: Authorization: Bearer token
 */
  export const updateBoardById = createAsyncThunk(
    'boards/updateBoardById',
    async (board, thunkAPI) => {
      const { _id, title, icon, background } = board;
  
      try {
        const { data } = await axios.put(`/boards/${_id}`, {
          title,
          icon,
          background,
        });
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

   /*
 * PATCH @ /boards
 * headers: Authorization: Bearer token
 */
   export const updateBoardBgById = createAsyncThunk(
    'boards/updateBoardBgById',
    async (board, thunkAPI) => {
      const { _id, background } = board;
  
      try {
        const { data } = await axios.patch(`/boards/${_id}`, {
          background,
        });
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

    /*
 * DELETE @ /boards/:id
 * headers: Authorization: Bearer token
 */

    export const deleteBoard = createAsyncThunk(
        'boards/deleteBoard',
        async (id, thunkAPI) => {
          try {
            const res = await axios.delete(`/boards/${id}`);
            return res.data;
          } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
          }
        }
      );

        /*
 * GET @ /boards/:id
 * headers: Authorization: Bearer token
 */

  // export const getBoard = createAsyncThunk(
  //   'boards/getBoard',
  //   async (id, thunkAPI) => {
  //     try {
  //       const res = await axios.get(`/boards/${id}`);
  //       return res.data;
  //     } catch (error) {
  //       return thunkAPI.rejectWithValue(error.message);
  //     }
  //   }
  // );
