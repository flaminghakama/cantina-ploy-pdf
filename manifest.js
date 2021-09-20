/*
 *  Song specificiation for Alt Jazz song Cantina Ploy 
 */

var altJazzSongs = altJazzSongs || {};

altJazzSongs["Cantina Ploy"] = {

    partsInBooks: {
        "Flute, Alto Flute & Piccolo": {
            "Cantina Ploy": [ "Flute" ], 
        },
        "English Horn": {
            "Cantina Ploy": [ "English Horn in F" ], 
        },
        "Bass Clarinet": {
            "Cantina Ploy": [ "Bass Clarinet in Bb" ],
        },
        "Voice/Percussion": {
            "Cantina Ploy": [ "Voice" ],
        },
        "Drums": {
            "Cantina Ploy": [ "Clave" ], 
        },
        "Violin I": {
            "Cantina Ploy": [ "Violin I" ], 
        },
        "Violin II": {
            "Cantina Ploy": [ "Violin II" ], 
        },
        "Viola": {
            "Cantina Ploy": [ "Viola" ], 
        },
        "'Cello": {
            "Cantina Ploy": [ "'Cello" ],
        },
        "Bass": {
            "Cantina Ploy": [ "Bass" ], 
        }
    },

    songs: {

        "Cantina Ploy": {
            metadata: { 
                title: "Cantina Ploy",
                composer: "Elaine Paul",
                arranger: "Elaine Paul",
                genre: "Dance",
                bpm: '100bpm',
                key: "B Major"
            },
            baseUrl: 'http://ali-cia.net/altjazz/scores/', 
            pdfSubdir: "/",
            fileLocation: "cantina-ploy",
            filePrefix: "cantina-ploy-",
            parts: {
                "Flute": { fileSuffix: "Flute" },
                "English Horn in F": { fileSuffix: "English-Horn-in-F" },
                //"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
                "Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
                //"Bassoon": { fileSuffix: "Bassoon" },
                //"Trumpet in Bb": { fileSuffix: "Trumpet-in-Bb" },
                //"Horn in F": { fileSuffix: "Horn-in-F" },
                //"Trombone": { fileSuffix: "Trombone" },
                "Clave": { fileSuffix: "Clave" },
                //"Piano": { fileSuffix: "Piano" },
                "Voice": { fileSuffix: "Voice" },
                "Violin I": { fileSuffix: "Violin-I" },
                "Violin II": { fileSuffix: "Violin-II" },
                "Viola": { fileSuffix: "Viola" },
                "'Cello": { fileSuffix: "Cello" },
                "Bass": { fileSuffix: "Bass" },
            },
            scores: {
                //"Rhythm": { fileSuffix: "Rhythm" },
                //"Condensed Score": { fileSuffix: "Condensed-Score" },
                "Score Transposed": { fileSuffix: "Score-Transposed" },
                //"Score Concert": { fileSuffix: "Score-Concert" },
                //"Lead Sheet": { fileSuffix: "Lead-Sheet" },
            },
            recordings: {
                original: {
                    description: 'Original recording',
                    url: 'https://soundcloud.com/flaminghakama/cantina-ploy'
                },
                reference: {
                    description: '',
                    url: ''
                },
                reading: {
                    description: 'reading',
                    url: ''
                },
                recording: {
                    description: 'recording',
                    url: ''
                },
                live: {
                    description: 'live',
                    url: ''
                }
            }
        }
    }
};