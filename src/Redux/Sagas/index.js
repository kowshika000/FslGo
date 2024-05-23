import { all } from "redux-saga/effects";
import watchShipmentCount from "./ShipmentCountSaga";
import watchSailing from "./SailingSaga";
import watchTodo from "./TodoSaga";
import watchBooking from "./BookingSaga";
import watchInboxCount from "./InboxCountSaga";
import watchPort from "./PortSaga";
import watchLogin from "./LoginSaga";
import watchOpenSailing from "./OpenSailingSaga";
import watchMap from "./MapSaga";

export default function* rootSaga() {
  yield all([
    watchShipmentCount(),
    watchSailing(),
    watchTodo(),
    watchBooking(),
    watchInboxCount(),
    watchPort(),
    watchLogin(),
    watchOpenSailing(),
    watchMap(),
  ]);
}
