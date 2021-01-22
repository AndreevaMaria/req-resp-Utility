interface RecordRequest {
  id: number;
  session_id: number; // SessionRecord.id
  status: string; // enum pending / error / done
  status_code: number;
  bloc_action_id: number; // RecordBlocAction.id || null
  method: string; // enum POST / GET / DELETE / PUT
  duration: number;
  params: string; // json
  payload: string; // json
  created_at: Date;
  response_at: Date;
  url: string;
  headers_response: string; // json
  headers: string; // json
}

interface RecordBloc {
  id: number;
  name: string;
}

interface RecordBlocAction {
  id: number;
  id_bloc: number; // -> RecordBloc.id
  name: string;
  payload: string; // json
}

interface RecordBlocEvent {
  id: number;
  id_bloc: number; // -> RecordBloc.id
  id_bloc_action: number; // -> RecordBlocAction.id
  name: string;
  payload: string; // json
}

interface SessionRecord {
  id: number;
  device_id: number; // DeviceRecord.id
  created_at: Date;
  updated_at: Date;
}

interface DeviceRecord {
  id: number;
  datetime_last_active: Date;
  active_session_id: number;
  device_name: string;
  device_version: string;
  identifier: string;
  product: string;
}

interface User {
  id: number;
  login: string;
  email: string;
  token: string;
  password: string;
  last_request_id; // RecordRequest.id
}

interface UserFavoriteDevice {
  id: number;
  device_id: number; // DeviceRecord.id
  created_at: number;
}

/**
 * Methods:
 * getMe -> User, favoritesDevices
 * getLastRequests(idRequest) -> RecordRequest[]
 * getRequests( idSessions, idDevices, idBlocs, idBlocActions ) -> RecordRequest[]
 * addRequest(RecordRequest)
 * login(login, password)
 * logout(token)
 * addFavoriteDevice(id)
 * removeFavoriteDevice(id)
 * getAllRevices()
 * getDevice(id)
 */
