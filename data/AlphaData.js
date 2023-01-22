const alphaData = [
    {
        "TimeStamp": "2023-01-06 09:30:00.369765016",
        "TimeStampEpoch": "1673015400369765016",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bba-9283-11ed-a702-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 16.14,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.369815365",
        "TimeStampEpoch": "1673015400369815365",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bba-9283-11ed-a702-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 16.14,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.369839902",
        "TimeStampEpoch": "1673015400369839902",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bbb-9283-11ed-b530-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 24.24,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.369887793",
        "TimeStampEpoch": "1673015400369887793",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbb-9283-11ed-b530-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 24.24,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.372541345",
        "TimeStampEpoch": "1673015400372541345",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bba-9283-11ed-a702-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.372573203",
        "TimeStampEpoch": "1673015400372573203",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bbc-9283-11ed-ac5e-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 16.12,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.372589155",
        "TimeStampEpoch": "1673015400372589155",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bba-9283-11ed-a702-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.372593117",
        "TimeStampEpoch": "1673015400372593117",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bba-9283-11ed-a702-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.372620669",
        "TimeStampEpoch": "1673015400372620669",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbc-9283-11ed-ac5e-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 16.12,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.427252559",
        "TimeStampEpoch": "1673015400427252559",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bbd-9283-11ed-a55f-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 17.48,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.427301406",
        "TimeStampEpoch": "1673015400427301406",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbd-9283-11ed-a55f-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 17.48,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.427393473",
        "TimeStampEpoch": "1673015400427393473",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bbe-9283-11ed-84c7-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 22.87,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.427442833",
        "TimeStampEpoch": "1673015400427442833",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbe-9283-11ed-84c7-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 22.87,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.427643132",
        "TimeStampEpoch": "1673015400427643132",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bbc-9283-11ed-ac5e-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.427688561",
        "TimeStampEpoch": "1673015400427688561",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbc-9283-11ed-ac5e-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.427692860",
        "TimeStampEpoch": "1673015400427692860",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbc-9283-11ed-ac5e-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.427734909",
        "TimeStampEpoch": "1673015400427734909",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bbb-9283-11ed-b530-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.427784211",
        "TimeStampEpoch": "1673015400427784211",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbb-9283-11ed-b530-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.427788163",
        "TimeStampEpoch": "1673015400427788163",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbb-9283-11ed-b530-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.491189071",
        "TimeStampEpoch": "1673015400491189071",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bbf-9283-11ed-a85d-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 17.62,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.491206861",
        "TimeStampEpoch": "1673015400491206861",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc0-9283-11ed-a83b-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 22.74,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.491239023",
        "TimeStampEpoch": "1673015400491239023",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbf-9283-11ed-a85d-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 17.62,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.491252387",
        "TimeStampEpoch": "1673015400491252387",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc0-9283-11ed-a83b-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 22.74,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.705396846",
        "TimeStampEpoch": "1673015400705396846",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bbd-9283-11ed-a55f-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.705446152",
        "TimeStampEpoch": "1673015400705446152",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbd-9283-11ed-a55f-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.705448760",
        "TimeStampEpoch": "1673015400705448760",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbd-9283-11ed-a55f-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.705459769",
        "TimeStampEpoch": "1673015400705459769",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bbe-9283-11ed-84c7-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.705508280",
        "TimeStampEpoch": "1673015400705508280",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbe-9283-11ed-84c7-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.705512322",
        "TimeStampEpoch": "1673015400705512322",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbe-9283-11ed-84c7-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.705704239",
        "TimeStampEpoch": "1673015400705704239",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bbf-9283-11ed-a85d-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.705753277",
        "TimeStampEpoch": "1673015400705753277",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbf-9283-11ed-a85d-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.705756292",
        "TimeStampEpoch": "1673015400705756292",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bbf-9283-11ed-a85d-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.705813016",
        "TimeStampEpoch": "1673015400705813016",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc0-9283-11ed-a83b-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.705857975",
        "TimeStampEpoch": "1673015400705857975",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc0-9283-11ed-a83b-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:00.705864478",
        "TimeStampEpoch": "1673015400705864478",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc0-9283-11ed-a83b-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:01.582227580",
        "TimeStampEpoch": "1673015401582227580",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc1-9283-11ed-b186-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 19.77,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:01.582381579",
        "TimeStampEpoch": "1673015401582381579",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc2-9283-11ed-a07f-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 20.58,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:02.212744956",
        "TimeStampEpoch": "1673015402212744956",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc1-9283-11ed-b186-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 19.77,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:02.212758059",
        "TimeStampEpoch": "1673015402212758059",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc2-9283-11ed-a07f-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 20.58,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:02.322783361",
        "TimeStampEpoch": "1673015402322783361",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc2-9283-11ed-a07f-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:02.322796752",
        "TimeStampEpoch": "1673015402322796752",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc3-9283-11ed-890f-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 20.6,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:02.483381106",
        "TimeStampEpoch": "1673015402483381106",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc4-9283-11ed-bf5f-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 20.58,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:02.601300456",
        "TimeStampEpoch": "1673015402601300456",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc1-9283-11ed-b186-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.232223873",
        "TimeStampEpoch": "1673015403232223873",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc2-9283-11ed-a07f-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.232228780",
        "TimeStampEpoch": "1673015403232228780",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc2-9283-11ed-a07f-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.232257291",
        "TimeStampEpoch": "1673015403232257291",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc3-9283-11ed-890f-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 20.6,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.232269119",
        "TimeStampEpoch": "1673015403232269119",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc4-9283-11ed-bf5f-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 20.58,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.232284056",
        "TimeStampEpoch": "1673015403232284056",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc1-9283-11ed-b186-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.232288473",
        "TimeStampEpoch": "1673015403232288473",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc1-9283-11ed-b186-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.232996502",
        "TimeStampEpoch": "1673015403232996502",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc3-9283-11ed-890f-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.233088131",
        "TimeStampEpoch": "1673015403233088131",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc4-9283-11ed-bf5f-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.240097710",
        "TimeStampEpoch": "1673015403240097710",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc3-9283-11ed-890f-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.240104786",
        "TimeStampEpoch": "1673015403240104786",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc3-9283-11ed-890f-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.240117149",
        "TimeStampEpoch": "1673015403240117149",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc4-9283-11ed-bf5f-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.240123241",
        "TimeStampEpoch": "1673015403240123241",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc4-9283-11ed-bf5f-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.571331950",
        "TimeStampEpoch": "1673015403571331950",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc5-9283-11ed-937e-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 19.77,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.571454977",
        "TimeStampEpoch": "1673015403571454977",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc6-9283-11ed-bd3e-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 20.58,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.710358138",
        "TimeStampEpoch": "1673015403710358138",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc7-9283-11ed-978f-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 20.59,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:03.983138591",
        "TimeStampEpoch": "1673015403983138591",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc8-9283-11ed-af7c-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 20.6,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:04.213219477",
        "TimeStampEpoch": "1673015404213219477",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc5-9283-11ed-937e-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 19.77,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:04.213237685",
        "TimeStampEpoch": "1673015404213237685",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc6-9283-11ed-bd3e-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 20.58,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:04.213249768",
        "TimeStampEpoch": "1673015404213249768",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc7-9283-11ed-978f-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 20.59,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:04.213263637",
        "TimeStampEpoch": "1673015404213263637",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc8-9283-11ed-af7c-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 20.6,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:04.215443105",
        "TimeStampEpoch": "1673015404215443105",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc6-9283-11ed-bd3e-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:04.215467227",
        "TimeStampEpoch": "1673015404215467227",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc7-9283-11ed-978f-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:04.220509223",
        "TimeStampEpoch": "1673015404220509223",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc6-9283-11ed-bd3e-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:04.220518088",
        "TimeStampEpoch": "1673015404220518088",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc6-9283-11ed-bd3e-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:04.220522576",
        "TimeStampEpoch": "1673015404220522576",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc7-9283-11ed-978f-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:04.220526120",
        "TimeStampEpoch": "1673015404220526120",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc7-9283-11ed-978f-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.550178838",
        "TimeStampEpoch": "1673015405550178838",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc5-9283-11ed-937e-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.550199692",
        "TimeStampEpoch": "1673015405550199692",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc9-9283-11ed-830b-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 19.76,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.550229103",
        "TimeStampEpoch": "1673015405550229103",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc5-9283-11ed-937e-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.550233311",
        "TimeStampEpoch": "1673015405550233311",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc5-9283-11ed-937e-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.550246341",
        "TimeStampEpoch": "1673015405550246341",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc9-9283-11ed-830b-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 19.76,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.550455830",
        "TimeStampEpoch": "1673015405550455830",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc8-9283-11ed-af7c-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.550473317",
        "TimeStampEpoch": "1673015405550473317",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bca-9283-11ed-a8d4-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 20.74,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.550502651",
        "TimeStampEpoch": "1673015405550502651",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc8-9283-11ed-af7c-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.550504860",
        "TimeStampEpoch": "1673015405550504860",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc8-9283-11ed-af7c-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.550523993",
        "TimeStampEpoch": "1673015405550523993",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bca-9283-11ed-a8d4-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 20.74,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.601139667",
        "TimeStampEpoch": "1673015405601139667",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bcb-9283-11ed-8c52-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 19.77,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.601157962",
        "TimeStampEpoch": "1673015405601157962",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bcc-9283-11ed-a52d-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 20.6,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.601188170",
        "TimeStampEpoch": "1673015405601188170",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bcb-9283-11ed-8c52-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 19.77,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.601204723",
        "TimeStampEpoch": "1673015405601204723",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bcc-9283-11ed-a52d-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 20.6,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.619329986",
        "TimeStampEpoch": "1673015405619329986",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bc9-9283-11ed-830b-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.619376261",
        "TimeStampEpoch": "1673015405619376261",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc9-9283-11ed-830b-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.619379458",
        "TimeStampEpoch": "1673015405619379458",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bc9-9283-11ed-830b-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.619415688",
        "TimeStampEpoch": "1673015405619415688",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bca-9283-11ed-a8d4-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.619460264",
        "TimeStampEpoch": "1673015405619460264",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bca-9283-11ed-a8d4-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.619464266",
        "TimeStampEpoch": "1673015405619464266",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bca-9283-11ed-a8d4-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.619877161",
        "TimeStampEpoch": "1673015405619877161",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bcb-9283-11ed-8c52-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.619889372",
        "TimeStampEpoch": "1673015405619889372",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bcc-9283-11ed-a52d-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.619922446",
        "TimeStampEpoch": "1673015405619922446",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bcb-9283-11ed-8c52-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.619926886",
        "TimeStampEpoch": "1673015405619926886",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bcb-9283-11ed-8c52-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.619932946",
        "TimeStampEpoch": "1673015405619932946",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bcc-9283-11ed-a52d-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:05.619936725",
        "TimeStampEpoch": "1673015405619936725",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bcc-9283-11ed-a52d-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:06.626018937",
        "TimeStampEpoch": "1673015406626018937",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bcd-9283-11ed-9272-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 19.77,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:06.626068038",
        "TimeStampEpoch": "1673015406626068038",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bcd-9283-11ed-9272-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 19.77,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:06.626144352",
        "TimeStampEpoch": "1673015406626144352",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bce-9283-11ed-980c-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 20.65,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:06.626190970",
        "TimeStampEpoch": "1673015406626190970",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bce-9283-11ed-980c-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 20.65,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:06.690804581",
        "TimeStampEpoch": "1673015406690804581",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bcf-9283-11ed-aa2d-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 20.6,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:06.690851717",
        "TimeStampEpoch": "1673015406690851717",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bcf-9283-11ed-aa2d-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 20.6,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:06.691314511",
        "TimeStampEpoch": "1673015406691314511",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bce-9283-11ed-980c-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:06.691360312",
        "TimeStampEpoch": "1673015406691360312",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bce-9283-11ed-980c-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:06.691364102",
        "TimeStampEpoch": "1673015406691364102",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bce-9283-11ed-980c-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:29.285207051",
        "TimeStampEpoch": "1673015429285207051",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bcf-9283-11ed-aa2d-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:29.285225754",
        "TimeStampEpoch": "1673015429285225754",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd0-9283-11ed-b7cd-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 20.61,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:29.285257933",
        "TimeStampEpoch": "1673015429285257933",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bcf-9283-11ed-aa2d-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:29.285262641",
        "TimeStampEpoch": "1673015429285262641",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bcf-9283-11ed-aa2d-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:29.285270944",
        "TimeStampEpoch": "1673015429285270944",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd0-9283-11ed-b7cd-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 20.61,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:55.184652102",
        "TimeStampEpoch": "1673015455184652102",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd1-9283-11ed-ab79-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 19.78,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:55.184702454",
        "TimeStampEpoch": "1673015455184702454",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd1-9283-11ed-ab79-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 19.78,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:55.184786616",
        "TimeStampEpoch": "1673015455184786616",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bcd-9283-11ed-9272-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:55.184832279",
        "TimeStampEpoch": "1673015455184832279",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bcd-9283-11ed-9272-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:30:55.184836177",
        "TimeStampEpoch": "1673015455184836177",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bcd-9283-11ed-9272-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:01.750317392",
        "TimeStampEpoch": "1673015461750317392",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd2-9283-11ed-b18f-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 19.79,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:01.750369747",
        "TimeStampEpoch": "1673015461750369747",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd2-9283-11ed-b18f-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 19.79,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:01.750480491",
        "TimeStampEpoch": "1673015461750480491",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd1-9283-11ed-ab79-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:01.750526780",
        "TimeStampEpoch": "1673015461750526780",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd1-9283-11ed-ab79-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:01.750530500",
        "TimeStampEpoch": "1673015461750530500",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd1-9283-11ed-ab79-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:15.141748726",
        "TimeStampEpoch": "1673015475141748726",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd3-9283-11ed-8c3f-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 20.6,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:15.141799402",
        "TimeStampEpoch": "1673015475141799402",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd3-9283-11ed-8c3f-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 20.6,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:15.141864805",
        "TimeStampEpoch": "1673015475141864805",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd0-9283-11ed-b7cd-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:15.141911099",
        "TimeStampEpoch": "1673015475141911099",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd0-9283-11ed-b7cd-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:15.141915150",
        "TimeStampEpoch": "1673015475141915150",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd0-9283-11ed-b7cd-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:16.560475867",
        "TimeStampEpoch": "1673015476560475867",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd4-9283-11ed-b9cf-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 19.8,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:16.560527566",
        "TimeStampEpoch": "1673015476560527566",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd4-9283-11ed-b9cf-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 19.8,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:16.560639442",
        "TimeStampEpoch": "1673015476560639442",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd2-9283-11ed-b18f-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:16.560688049",
        "TimeStampEpoch": "1673015476560688049",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd2-9283-11ed-b18f-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:16.560693001",
        "TimeStampEpoch": "1673015476560693001",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd2-9283-11ed-b18f-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:17.034872225",
        "TimeStampEpoch": "1673015477034872225",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd4-9283-11ed-b9cf-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:17.034920496",
        "TimeStampEpoch": "1673015477034920496",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd4-9283-11ed-b9cf-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:17.034924429",
        "TimeStampEpoch": "1673015477034924429",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd4-9283-11ed-b9cf-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:17.034945721",
        "TimeStampEpoch": "1673015477034945721",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd5-9283-11ed-9488-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 19.79,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:17.034992439",
        "TimeStampEpoch": "1673015477034992439",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd5-9283-11ed-9488-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 19.79,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:17.259186881",
        "TimeStampEpoch": "1673015477259186881",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd6-9283-11ed-97b9-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 19.8,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:17.259234561",
        "TimeStampEpoch": "1673015477259234561",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd6-9283-11ed-97b9-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 19.8,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:17.259544766",
        "TimeStampEpoch": "1673015477259544766",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd5-9283-11ed-9488-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:17.259590859",
        "TimeStampEpoch": "1673015477259590859",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd5-9283-11ed-9488-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:17.259596165",
        "TimeStampEpoch": "1673015477259596165",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd5-9283-11ed-9488-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:25.791041409",
        "TimeStampEpoch": "1673015485791041409",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd7-9283-11ed-9663-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 19.81,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:25.791092229",
        "TimeStampEpoch": "1673015485791092229",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd7-9283-11ed-9663-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 19.81,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:25.791180098",
        "TimeStampEpoch": "1673015485791180098",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd6-9283-11ed-97b9-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:25.791227736",
        "TimeStampEpoch": "1673015485791227736",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd6-9283-11ed-97b9-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:25.791231737",
        "TimeStampEpoch": "1673015485791231737",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd6-9283-11ed-97b9-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:31.303129716",
        "TimeStampEpoch": "1673015491303129716",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd7-9283-11ed-9663-047c16291a22",
        "MessageType": "CancelRequest",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:31.303158762",
        "TimeStampEpoch": "1673015491303158762",
        "Direction": "NBFToExchange",
        "OrderID": "b8bd3bd8-9283-11ed-8009-047c16291a22",
        "MessageType": "NewOrderRequest",
        "Symbol": "PP847",
        "OrderPrice": 19.8,
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:31.303179722",
        "TimeStampEpoch": "1673015491303179722",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd7-9283-11ed-9663-047c16291a22",
        "MessageType": "CancelAcknowledged",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:31.303184087",
        "TimeStampEpoch": "1673015491303184087",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd7-9283-11ed-9663-047c16291a22",
        "MessageType": "Cancelled",
        "Symbol": "PP847",
        "Exchange": "Alpha"
    },
    {
        "TimeStamp": "2023-01-06 09:31:31.303205760",
        "TimeStampEpoch": "1673015491303205760",
        "Direction": "ExchangeToNBF",
        "OrderID": "b8bd3bd8-9283-11ed-8009-047c16291a22",
        "MessageType": "NewOrderAcknowledged",
        "Symbol": "PP847",
        "OrderPrice": 19.8,
        "Exchange": "Alpha"
    }
]