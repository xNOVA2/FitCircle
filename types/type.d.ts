

export interface AuthModule {
    title: string;
    buttonText:string;
    subHeading?:string;
    hasButton?:boolean
    forgetPassword?:boolean
    children: React.ReactNode;
    additionalText?: string;
    additionalLink?: string;
    errorMessage?: string;
    isLoading?: boolean;
    // functions
    onClick?:()=>void 

}

export interface ResetSchemaType {
    password: string;
    confirmPassword: string;
  }
export interface ForgetSchemaType {
  email: string;
}
 interface SiginFields {
email:string,
password:string
}



export interface adminFormikType {
  fullName: string
  email: string
  phoneNumber: string
  password: string
  confirmPassword: string
}

export interface SubAdminType {
  firstName: string
  lastName: string
  email: string
  phone: string
  dob:MMDDYYYY
  location:string
  password: string
}
export interface User {
  _id: string;
  age: number;
  email: string;
  phone: string;
  gender: string;
  firstName: string;
  city: string;
  isActive:boolean;
  username:string
  interests: Interest[];
}
export interface Pagination {
  totalItems: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
export interface ApiResponse {
  message: string;
  data: {
    users: User[];
    pagination: Pagination;
  };
}
export interface SingleUserApiResponse {
  data: {
    users: User;
  };
}
export interface Interest {
  name: string;
}


export interface Trainer {
  message:string
  data:[
    {
    _id: string;
    profileImage: string;
    email: string;
    phone: string;
    fcmToken: string;
    role: string;
    isProfileCompleted: boolean;
    isActive: boolean;
    firstName: string;
    lastName: string | null;
    username: string | null;
    bio: string | null;
    country: string | null;
    city: string | null;
    physicalInformation: string | null;
    gender: string;
    age: number | null;
    dob: string | null;
    hourlyRate: number | null;
    bodyType: string;
    activity: string;
    communities: any[]; 
    certificates: Certificate[]; 
    isVerified: boolean;
    posts: Post[];
    socialMediaLinks: SocialMediaLink[]; 
    createdAt: string;
    updatedAt: string;
    completePhone: string;
    isDeleted: boolean;
    blockedUsers: any[]; 
    fullName: string;
    musics: any[]; 
    noOfCommunities: number;
    noOfFollowers: number;
    noOfFollowings: number;
    showAge: boolean;
    showEmailAddress: boolean;
    showName: boolean;
    subscribers: any[]; 
    wallet: number;
    interests: any[]; 
    noOfBookings: number;
  }
]
}

export interface Post {
  _id: string;
  user: string;
  title: string | null;
  media: string;
  mediaType: string;
  thumbnail: string | null;
  visibility: string;
  text: string | null;
  hexCode: any[]; 
  cost: number | null;
  paidBy: any[]; 
  isBoosted: boolean;
  boostStartDate: string | null;
  boostEndDate: string | null;
  comments: any[]; 
  likes: any[]; 
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  commentsCount: number;
}






// export interface User {
//     fullName: string;
//     emailAddress: string;
//     premium?: string;
//     Tasker?:string
//     phoneNumber: string;
//     gender: string;
//     userSince: string; 
//     status: string;

//   }
//   enum YesNo {
//     Yes = 'YES',
//     No = 'NO',
//   }
//  export interface UsersProps {
//     users: User[];
//     isSubAdmin?:boolean
//   }


export interface Certificate {
  
}

export interface CertificatesProps {
  certificates: Certificate[];
}

export interface SocialMediaLink {
  name: string;
  link: string;
  _id: string;
}

export interface SocialMediaLinksProps {
  socialMediaLinks: SocialMediaLink[];
}

export interface SubAdmin {
  _id: string;
  email: string;
  phone: string;
  fcmToken: string;
  role: string;
  isProfileCompleted: boolean;
  isActive: boolean;
  firstName: string;
  lastName: string;
  username: string;
  bio: string;
  country: string;
  city: string;
  physicalInformation: string;
  gender: string;
  age: number;
  dob: string; 
  hourlyRate: number | null; 
}


export interface trascation {
  message:string,
    transactions:[
      {
        amount:number,
        createdAt:string,
        type:string
        time:string
      }
    ]
  }

export interface UserProfile {
  data: {
    age: number;
    bio: string;
    city: string;
    completePhone: string;
    country: string;
    email: string;
    firstName: string;
    gender: string;
    interests: Interest[]; 
    lastName: string;
    noOfCommunities: number;
    noOfFollowers: number;
    noOfFollowings: number;
    noOfSubscribers: number;
    profileImage: null | string; 
    socialMediaLinks: any[]; 
    subscribers: any[]; 
    username: string;
    _id: string;
  };
  message: string;
}


export interface ApiResponseTerms {
  message: string;

  terms: {
    content: string;
  };
}

export interface ApiResponsePrivacyPolicy {
  message: string;

  policy: {
    content: string;
  };
}


export interface ApiResponseFAQ {
  message: string;

  faqs: [{
    content: string;
    title:string
    _id:string
  }
  ]
}



export interface Interest {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}

export interface InterestsResponse {
  message: string;

    interests: Interest[];
}

export interface SignInValues {
  email: string;
  password: string;
}

export interface CommunityType{
  communities:Community[]
}

export interface Community{
  
    _id:string,
    name:string,
    image:string
    members:[]
}


interface TableInterface {
  data: string[];
}