interface StudyDataProps {
  title: string;
  main: {
    image: string;
    heading: string;
    description: string;
    tag: string;
  };
  sideCards: {
    image: string;
    title: string;
    tag: string;
  }[];
}

export const studyData: StudyDataProps = {
    title: "Study with us",
    main: {
      image: "https://www.usnews.com/dims4/USNEWS/79eb9d6/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F9b%2F5a%2Fc2f5a4f84960a66aa9276432b51b%2Fgettyimages-1478520911.jpg",
      heading: "International Foundation Programme for Computer Science",
      description: "Learn all about the International Foundation Programme for Computer Science, your stepping stone to our BSc Computer Science",
      tag: "Study",
    },
    sideCards: [
      {
        image: "https://images.shiksha.com/mediadata/images/articles/1744019588phpVCRWzS.jpeg",
        title: "Prepare for undergraduate study with our International Foundation Programme for Computer Science",
        tag: "Study",
      },
      {
        image: "https://www.creighton.edu/sites/default/files/styles/ss_test/public/2024-09/hero-homepage.webp?itok=138JcVvL",
        title: "Fast track your career in business with our CMI and CIMA accredited Global MBA",
        tag: "Study",
      },
      {
        image: "https://www.winchester.ac.uk/media/Ofsted-Outstanding.jpg",
        title: "Global MBA webinar",
        tag: "Event",
      },
    ],
  };

  export interface SideCardData {
    image: string;
    title: string;
    tag: string;
  }