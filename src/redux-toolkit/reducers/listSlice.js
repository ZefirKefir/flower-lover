import { createSlice } from "@reduxjs/toolkit";

const idList = ['FMAA1S', 'BQZ9W8', 'Y1JB95', 'HFVARV', 'T13DST', '063NYB', 'P2YRDJ', 'KIMC7C', 'X65GJL', 'FW72RE', 'GUEHRY', 'CMD3M2', '1K7JAC', 'UDKGTR', '7M3XV3', 'EP3V1I', 'EZ0M04', 'A2OVVU', 'XDIN8H', 'HSUWQ8', 'ID2QR5', 'PS20OX', 'FFX3CW', '9VBO6O', 'WS4T8X', '596EQ0', '56DTQA', 'BY2GLE', '0WXWZP', 'TYASS3', 'WYSAUF', 'D1T71U', '4BZZQQ', '9FN7L6', 'NZ8ZYT', '64K8GK', 'HP12HI', 'O5RCN9', 'ERXPB8', '87B0V0', 'L4U579', '4L5QFC', '4JC6FM', 'AA1SBQ', 'Z9W8Y1', 'JB95HF', 'VARVT1', '3DST06', '3NYBP2', 'YRDJKI', 'MC7CX6', '5GJLFW', '72REGU', 'EHRYCM'];
const initialState = {
  list: idList,
}

export const listSlice = createSlice({
  name: 'lister',
  initialState,
  reducers: {
    resetList: state => {
      state.list.length = 0;
      idList.map(item => state.list.push(item));
      // localStorage.setItem('idList', idList.join(','));
    },
    clearList: state => {
      state.list.length = 0;
      // localStorage.setItem('idList', '');
    },
    addToList: (state, action) => {
      state.list.push(action.payload);
      // localStorage.setItem('idList', '');
    },
    setList: (state, action) => {
      state.list = action.payload.split(',');
      // localStorage.setItem('idList', '');
    },
  },
})

export const { resetList, clearList, setList, addToList } = listSlice.actions;
export default listSlice.reducer;