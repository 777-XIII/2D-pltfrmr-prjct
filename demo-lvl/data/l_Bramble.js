const l_Bramble = [
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [725,726,727,728,729,730,731,732,733,734,735,725,726,727,728,729,730,731,732,733,734,735,725,726,727,728,729,730,731,732,733,734,735,725,726,727,728,729,730,731,732,733,734,735,725,726,727,728,729,730,731,732,733,734,735,725,726,727,728,729,730,731,732,733,734,735,725,726,727,728,729,730,731,732,733,734,735,725,726,727,728,729,730,731,732,733,734,735,725,726,727,728,729,730,731,732,733,734,735,725,726,727,728,729,730,731,732,733,734,735,725,726,727,728,729,730,731,732,733,734,735,725,726,727,728,729,730,731,732,733],
   [760,761,762,763,764,765,766,767,768,769,770,760,761,762,763,764,765,766,767,768,769,770,760,761,762,763,764,765,766,767,768,769,770,760,761,762,763,764,765,766,767,768,769,770,760,761,762,763,764,765,766,767,768,769,770,760,761,762,763,764,765,766,767,768,769,770,760,761,762,763,764,765,766,767,768,769,770,760,761,762,763,764,765,766,767,768,769,770,760,761,762,763,764,765,766,767,768,769,770,760,761,762,763,764,765,766,767,768,769,770,760,761,762,763,764,765,766,767,768,769,770,760,761,762,763,764,765,766,767,768],
   [795,796,797,798,799,800,801,802,803,804,805,795,796,797,798,799,800,801,802,803,804,805,795,796,797,798,799,800,801,802,803,804,805,795,796,797,798,799,800,801,802,803,804,805,795,796,797,798,799,800,801,802,803,804,805,795,796,797,798,799,800,801,802,803,804,805,795,796,797,798,799,800,801,802,803,804,805,795,796,797,798,799,800,801,802,803,804,805,795,796,797,798,799,800,801,802,803,804,805,795,796,797,798,799,800,801,802,803,804,805,795,796,797,798,799,800,801,802,803,804,805,795,796,797,798,799,800,801,802,803],
   [830,831,832,833,834,835,836,837,838,839,840,830,831,832,833,834,835,836,837,838,839,840,830,831,832,833,834,835,836,837,838,839,840,830,831,832,833,834,835,836,837,838,839,840,830,831,832,833,834,835,836,837,838,839,840,830,831,832,833,834,835,836,837,838,839,840,830,831,832,833,834,835,836,837,838,839,840,830,831,832,833,834,835,836,837,838,839,840,830,831,832,833,834,835,836,837,838,839,840,830,831,832,833,834,835,836,837,838,839,840,830,831,832,833,834,835,836,837,838,839,840,830,831,832,833,834,835,836,837,838],
   [865,866,867,868,869,870,871,872,873,874,875,865,866,867,868,869,870,871,872,873,874,875,865,866,867,868,869,870,871,872,873,874,875,865,866,867,868,869,870,871,872,873,874,875,865,866,867,868,869,870,871,872,873,874,875,865,866,867,868,869,870,871,872,873,874,875,865,866,867,868,869,870,871,872,873,874,875,865,866,867,868,869,870,871,872,873,874,875,865,866,867,868,869,870,871,872,873,874,875,865,866,867,868,869,870,871,872,873,874,875,865,866,867,868,869,870,871,872,873,874,875,865,866,867,868,869,870,871,872,873],
   [900,901,902,903,904,905,906,907,908,909,910,900,901,902,903,904,905,906,907,908,909,910,900,901,902,903,904,905,906,907,908,909,910,900,901,902,903,904,905,906,907,908,909,910,900,901,902,903,904,905,906,907,908,909,910,900,901,902,903,904,905,906,907,908,909,910,900,901,902,903,904,905,906,907,908,909,910,900,901,902,903,904,905,906,907,908,909,910,900,901,902,903,904,905,906,907,908,909,910,900,901,902,903,904,905,906,907,908,909,910,900,901,902,903,904,905,906,907,908,909,910,900,901,902,903,904,905,906,907,908],
   [935,936,937,938,939,940,941,942,943,944,945,935,936,937,938,939,940,941,942,943,944,945,935,936,937,938,939,940,941,942,943,944,945,935,936,937,938,939,940,941,942,943,944,945,935,936,937,938,939,940,941,942,943,944,945,935,936,937,938,939,940,941,942,943,944,945,935,936,937,938,939,940,941,942,943,944,945,935,936,937,938,939,940,941,942,943,944,945,935,936,937,938,939,940,941,942,943,944,945,935,936,937,938,939,940,941,942,943,944,945,935,936,937,938,939,940,941,942,943,944,945,935,936,937,938,939,940,941,942,943],
   [970,971,972,973,974,975,976,977,978,979,980,970,971,972,973,974,975,976,977,978,979,980,970,971,972,973,974,975,976,977,978,979,980,970,971,972,973,974,975,976,977,978,979,980,970,971,972,973,974,975,976,977,978,979,980,970,971,972,973,974,975,976,977,978,979,980,970,971,972,973,974,975,976,977,978,979,980,970,971,972,973,974,975,976,977,978,979,980,970,971,972,973,974,975,976,977,978,979,980,970,971,972,973,974,975,976,977,978,979,980,970,971,972,973,974,975,976,977,978,979,980,970,971,972,973,974,975,976,977,978],
   [1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1005,1006,1007,1008,1009,1010,1011,1012,1013],
   [1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1040,1041,1042,1043,1044,1045,1046,1047,1048],
   [1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1075,1076,1077,1078,1079,1080,1081,1082,1083],
   [1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1110,1111,1112,1113,1114,1115,1116,1117,1118],
   [1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1145,1146,1147,1148,1149,1150,1151,1152,1153],
   [1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1180,1181,1182,1183,1184,1185,1186,1187,1188],
   [1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1215,1216,1217,1218,1219,1220,1221,1222,1223],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1250,1251,1252,1253,1254,1255,1256,1257,1258],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1285,1286,1287,1288,1289,1290,1291,1292,1293],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
