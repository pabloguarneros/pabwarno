export type image = {
    src: string,
    audio: string | null,
    description: string
}

export type display = {
    name: string,
    images: image[]
}

export type collection = {
    name: string,
    displays: display[]
}

export const gallery: collection[] = [
        {
        name: "..",
        displays: [
            {
                name: "",
                images: [
                        {src: "_DSC5148.jpg", audio: "ocean.wav", description:"Some angles"},
                        {src: "_DSC3774_(1).jpg", audio: "", description:""},
                        {src: "_DSC5117.jpg", audio: "", description:""},
                        {src: "_DSC4141.jpg", audio: "", description:""}
                    ]
            },
            {
                name: "",
                images: [
                        {src: "_DSC9532.jpg", audio: "", description:""},
                        {src: "_DSC1350.jpg", audio: "", description:""},
                    ]
            },
            {
                name: "",
                images: [
                    {src: "_DSC3662_2.jpg", audio: "", description:""},
                    {src: "_DSC0739.jpg", audio: "", description:""},
                    {src: "_DSC9338_(2).jpg", audio: "", description:""},
                    {src: "_DSC5898.jpg", audio: "", description:""}
                ]
            },
            {
                name: "",
                images: [
                        {src: "_DSC9598.jpg", audio: "", description:""},
                        {src: "ORG__DSC4458.jpg", audio: "", description:""},
                        {src: "_DSC3690.jpg", audio: "", description:""},
                    ]
            },
            {
                name: "",
                images: [
                    {src: "_DSC1708-2.jpg", audio: "", description:""},
                    {src: "_DSC1335-2.jpg", audio: "", description:""},
                    {src: "_DSC7995.jpg", audio: "", description:""},
                ]
            },
        ]
    },
    {
        name: "..",
        displays: [
            {
                name: "",
                images: [
                    {src: "_DSC1513.jpg", audio: "", description:""},
                    {src: "_DSC1656.jpg", audio: "", description:""},
                    {src: "_DSC1660.jpg", audio: "", description:""},
                ]
            },
            {
                name: ".",
                images: [
                    {src: "_DSC8600.jpg", audio: "", description:""},
                    {src: "ORG__DSC4761_(2).jpg", audio: "", description:""},
                    {src: "ORG__DSC5112.jpg", audio: "", description:""},
                    {src: "ORG__DSC5650.jpg", audio: "", description:""}
                ]
            },
            {
                name: ".",
                images: [
                    {src: "ORG__DSC6372.jpg", audio: "", description:""},
                    {src: "_DSC3606+2.jpg", audio: "", description:""},
                    {src: "ORG__DSC6845.jpg", audio: "", description:""}
                ]
            },
            {
                name: ".",
                images: [
                    {src: "_DSC8012-2.jpg", audio: "", description:""},
                    {src: "_DSC2336.jpg", audio: "", description:""},
                    {src: "_DSC4784.jpg", audio: "", description:""},
                    {src: "_DSC2660.jpg", audio: "", description:""}
                ]
            },
            {
                name: ".",
                images: [
                    {src: "_DSC6280.jpg", audio: "", description:""},
                    {src: "_DSC6483.jpg", audio: "", description:""}
                ]
            }
        ]
    },
    {
        name: "..",
        displays: [
            {
                name: "",
                images: [
                    {src: "_DSC2645.jpg", audio: "", description:""},
                ]
            },
            {
                name: "",
                images: [
                    {src: "_DSC9651.jpg", audio: "", description:""},
                    ]
            },
            {
                name: "",
                images: [
                    {src: "_DSC3806.jpg", audio: "", description:""},
                ]
            },
            {
                name: "",
                images: [
                    {src: "_DSC4207.jpg", audio: "", description:""},
                ]
            }
        ]
    },
    {
        name: "..",
        displays: [
            {
                name: "",
                images: [
                    {src: "_DSC7480.jpg", audio: "", description:""},
                    {src: "_DSC3799.jpg", audio: "", description:""},
                ]
            },
            {
                name: "",
                images: [
                    {src: "_DSC4470.jpg", audio: "", description:""},
                    {src: "_DSC6310.jpg", audio: "", description:""},
                ]
            },
            {
                name: "",
                images: [
                    {src: "_DSC2381.jpg", audio: "", description:""},
                    {src: "_DSC3565.jpg", audio: "", description:""},
                ]
            },
            {
                name: "",
                images: [
                    {src: "_DSC2405.jpg", audio: "ocean.wav", description:"I guess there are moments."},
                    ]
            },
            {
                name: "",
                images: [
                    {src: "_DSC7399.jpg", audio: "", description:""},
                ]
            }
        ]
    }


]