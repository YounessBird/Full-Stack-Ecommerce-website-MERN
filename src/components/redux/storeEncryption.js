import { encryptTransform } from "redux-persist-transform-encrypt";

const SetEncryptStore = encryptTransform({
  secretKey: "my-super-secret-key",
  onError: function (error) {
    // Handle the error.
  },
});

export default SetEncryptStore;
