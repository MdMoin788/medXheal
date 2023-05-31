export const AllFielSearch = ((SelectData, Search) => {
    const updatedData = SelectData?.filter((obj) => Object.values(obj).some((val) => {
        if (typeof (val) == typeof ("str") && val !== "") {
            if (val.toLowerCase().includes(Search.toLowerCase())) {
                return obj
            }
        }
        if (typeof (val) == typeof (6)) {
            let newStr = val.toString()
            if (typeof (newStr) == typeof ("str") && newStr !== "") {
                if (newStr.includes(Search)) {
                    return obj
                }
            }
        }
        if (typeof (val) === "object" && val !== null) {
            return Object.values(val).some((val1) => {
                if (typeof (val1) == typeof ("str") && val1 !== "") {
                    if (val1.toLowerCase().includes(Search.toLowerCase())) {
                        return obj
                    }
                }
                if (typeof (val1) == typeof (6)) {
                    let newStr = val1.toString()
                    if (typeof (newStr) == typeof ("str") && newStr !== "") {
                        if (newStr.includes(Search)) {
                            return obj
                        }
                    }
                }
            })
        }
    }))
    return updatedData
}
)


// if(nested then use below data else part )
   //  else {
    //   return Object.values(val).some((val1) => {
    //     if (val1 !== null) {
    //       return val1.toString().includes(Search)
    //     }
    //   })
    // }
