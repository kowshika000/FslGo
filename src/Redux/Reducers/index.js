import { combineReducers } from 'redux';
import shipmentCountReducer from './ShipmentCountReducer';
import inboxCountReducer from './InboxCountReducer';
import sailingReducer from './SailingReducer';
import TodoReducer from './TodoReducer';
import bookingReducer from './BookingReducer';
import portReducer from './PortReducer';
import loginReducer from './LoginReducer';
import openSailingReducer from './OpenSailingReducer';
import MapReducer from './MapReducer';
import ViewBookingReducer from "./ViewBookingReducer"
import UploadDocumentReducer from './UploadDocumentReducer';


const rootReducer = combineReducers({
    ShipmentCount: shipmentCountReducer,
    InboxCount: inboxCountReducer,
    Sailing : sailingReducer,
    Todo:TodoReducer,
    Booking: bookingReducer,
    Port: portReducer,
    Login: loginReducer,
    OpenSailing: openSailingReducer,
    Map: MapReducer,
    ViewBooking: ViewBookingReducer,
    UploadDocument:UploadDocumentReducer,
});

export default rootReducer;