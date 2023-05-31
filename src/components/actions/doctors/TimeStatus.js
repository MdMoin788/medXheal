

export const TimeStatus = (Status) => {


    const currentStatus = Status == "pending" ?
        { title: "pending", id: 0 } :
        Status == "8AM" ?
            { title: "8AM", id: 1 } :
            Status == "9AM" ?
                { title: "9AM", id: 2 } :
                Status == "10AM" ?
                    { title: "10AM", id: 3 } :
                    Status == "11AM" ?
                        { title: "11AM", id: 4 } :
                        Status == "12PM" ?
                            { title: "12PM", id: 5 } :
                            Status == "1PM" ?
                                { title: "1PM", id: 6 } :
                                Status == "2PM" ?
                                    { title: "2PM", id: 7 } :
                                    Status == "3PM" ?
                                        { title: "3PM", id: 8 } :
                                        Status == "4PM" ?
                                            { title: "4PM", id: 9 } :
                                            Status == "5PM" ?
                                                { title: "5PM", id: 10 } :
                                                Status == "6PM" ?
                                                    { title: "6PM", id: 11 } :
                                                    Status == "7PM" ?
                                                        { title: "7PM", id: 12 } :
                                                        Status == "8PM" ?
                                                            { title: "8PM", id: 13 } :
                                                            Status == "9PM" ?
                                                                { title: "9PM", id: 14 } :
                                                                Status == "10PM" ?
                                                                    { title: "10PM", id: 15 } : { title: "pending", id: 0 }


    return currentStatus
}