
import { ChemLab, LibrarySec1, LibrarySec2, NurseryGraduants, PhyLab, PresentationCompLab, PresentationCompLab2, PriPupil2, PrimaryGraduants, SecondaryGraduants, SeniorSec1, SmilingSecStudents, StudentWithKidney } from "../public/assets";

const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const unsplashPhotos = [
    {
        src: PresentationCompLab,
        // src: '../public/assets/images/gallery/presentation-comp-lab.jpeg',
        alt: "Computer Lab",
        title: "Computer Lab",
        width: 379,
        height: 226,
    },
    {
        src: PresentationCompLab2,
        alt: "Computer Lab",
        title: "Computer Lab",
        width: 379,
        height: 226,
    },

    {
        src: LibrarySec2,
        alt: "Library",
        title: "Library",
        width: 379,
        height: 226,
    },
    {
        src: LibrarySec1,
        alt: "Library",
        title: "Library",
        width: 379,
        height: 226,
    },
    {
        src: ChemLab,
        alt: "Chemistry Lab",
        title: "Chemistry Lab",
        width: 379,
        height: 226,
    },
    {
        src: PhyLab,
        alt: "Physics Lab",
        title: "Physics Lab",
        width: 379,
        height: 226,
    },
    {
        src: StudentWithKidney,
        alt: "Biology Lab",
        title: "Biology Lab",
        width: 379,
        height: 226,
    },

    {
        src: SmilingSecStudents,
        alt: "Secondary Students",
        title: "Secondary Students",
        width: 379,
        height: 226,
    },
    // {
    //   src: seniorSecBoys,
    //   alt: "Secondary Students",
    //   title: "Secondary Students",
    //   width: 379,
    //   height: 226,
    // },
    {
        src: SeniorSec1,
        alt: "Secondary Students",
        title: "Secondary Students",
        width: 379,
        height: 226,
    },

    {
        src: PriPupil2,
        alt: "Primary Pupils",
        title: "Primary Pupils",
        width: 379,
        height: 226,
    },
    {
        src: NurseryGraduants,
        alt: "Nursery Graduants Class of 2023",
        title: "Nursery Graduants Class of 2023",
        width: 379,
        height: 226,
    },
    {
        src: PrimaryGraduants,
        alt: "Primary Graduants Class of 2023",
        title: "Primary Graduants Class of 2023",
        width: 379,
        height: 226,
    },
    {
        src: SecondaryGraduants,
        alt: "Secondary Graduants Class of 2023",
        title: "Secondary Graduants Class of 2023",
        width: 379,
        height: 226,
    },
];

export const slides = unsplashPhotos.map((photo) => {
    const width = photo.width * 4;
    const height = photo.height * 4;
    return {
        src: photo.src,
        width,
        height,
        alt: photo.alt,
        title: photo.title,
        srcSet: breakpoints.map((breakpoint) => {
            const breakpointHeight = Math.round((height / width) * breakpoint);
            return {
                src: photo.src,
                width: breakpoint,
                height: breakpointHeight,
                alt: photo.alt,
                title: photo.title,
            };
        }),
    };
});
