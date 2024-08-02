import { MutationFunction } from "@tanstack/react-query";
import axios from "axios";
import { BaseURL } from "./Auth-API";

export const FetchUsers: MutationFunction<
  unknown,
  { token: string; search: string | null; page: number }
> = async ({
  token,
  search,
  page,
}: {
  token: string;
  search: string | null;
  page: number;
}) => {
  try {
    const url = `${BaseURL}/user/search-by-role?role=user&limit=9${
      search ? `&search=${search}` : ""
    }${page ? `&page=${page}` : ""}`;

    const response = await axios.get(url, { headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    
    console.error("Error in FetchUsers:", error);

    
    throw new Error(
      error.response?.data?.message || "An error occurred while fetching users."
    );
  }
};

export const FetchSingleUser: MutationFunction<
  unknown,
  { token: string; id: string }
> = async ({ token, id }: { token: string; id: string }) => {
  try {
    const url = `${BaseURL}/user/profile?userId=${id}`;

    const response = await axios.get(url, { headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    
    console.error("Error in FetchSingleUser:", error);

    
    throw new Error(
      error.response?.data?.message || "An error occurred while fetching users."
    );
  }
};

export const FetchCoaches: MutationFunction<
  unknown,
  { token: string; search: string | null; page: number }
> = async ({
  token,
  search,
  page,
}: {
  token: string;
  search: string | null;
  page: number;
}) => {
  try {
    const apiUrlBase =
      "http://fitcircle.yameenyousuf.com/api/user/all-trainers";
    const queryParams = [];

    if (search) {
      queryParams.push(`search=${search}`);
    }

    if (true) {
      queryParams.push(`limit=${9}`);
    }
    if (page) {
      queryParams.push(`page=${page}`);
    }

    const apiUrl = `${apiUrlBase}${
      queryParams.length > 0 ? `?${queryParams.join("&")}` : ""
    }`;

    const response = await axios.get(apiUrl, {
      headers: { accessToken: token },
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    
    console.error("Error in FetchUsers:", error);

    
    throw new Error(
      error.response?.data?.message || "An error occurred while fetching users."
    );
  }
};

// Add trainer API

export const AddTrainer: MutationFunction<
  unknown,
  {
    token: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    role: string;
    phoneCode: string;
  }
> = async ({
  token,
  firstName,
  lastName,
  email,
  password,
  phone,
  role,
  phoneCode,
}: {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  phoneCode: string;
}) => {
  try {
    const url = `${BaseURL}/user/add-trainer`;

    const response = await axios.post(
      url,
      { firstName, lastName, email, phone, password, role, phoneCode },
      { headers: { accessToken: token } }
    );

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else if (response.status === 422 || response.status === 409) {
      console.log(response.data);
      
      throw new Error(response.data.message);
    } else {
      console.log(response.status);
      
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    
    console.error("Error in AddTrainer:", error);

    
    throw new Error(
      error.response?.data?.message 
    );
  }
};


// fetch single trainer details with id

export const FetchSingleTrainer: MutationFunction<
  unknown,
  { token: string; id: string }
> = async ({ token, id }: { token: string; id: string }) => {
  try {
    const url = `${BaseURL}/user/trainer-profile/${id}`;

    const response = await axios.get(url, { headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    
    console.log("Error in FetchSingleUser:", error);

    
    throw new Error(
      error.response?.data?.message || "An error occurred while fetching users."
    );
  }
}

// fetch user trascation history data 

export const fetchUserTrascation: MutationFunction<
  unknown,
  { token: string; id: string }
> = async ({ token, id }: { token: string; id: string }) => {
  try {
    const url = `${BaseURL}/transaction?user=${id}`;

    const response = await axios.get(url, { headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    

    
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while fetching trascation."
    );
  }
}


// delete Signle Trainer with id

export const DeleteSignleTrainer: MutationFunction<
  unknown,
  { token: string; id: string }
> = async ({ token, id }: { token: string; id: string }) => {
  try {
    const url = `${BaseURL}/user/remove/${id}`;

    const response = await axios.delete(url, { headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    
    console.log("Error in FetchSingleUser:", error);

    
    throw new Error(
      error.response?.data?.message || "An error occurred while fetching users."
    );
  }
}



// fetch all sub admins data

export const FetchSubAdmins: MutationFunction<
  unknown,
  { token: string; search: string | null; page: number }
> = async ({
  token,
  search,
  page,
}: {
  token: string;
  search: string | null;
  page: number;
}) => {
  try {
    const url = `${BaseURL}/user/search-by-role?role=sub-admin&limit=9${
      search ? `&search=${search}` : ""
    }${page ? `&page=${page}` : ""}`;

    const response = await axios.get(url, { headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    
    console.error("Error in FetchUsers:", error);

    
    throw new Error(
      error.response?.data?.message || "An error occurred while fetching users."
    );
  }
}


// delete Single Sub Admin with id

export const DeleteSignleSubAdmin: MutationFunction<
  unknown,
  { token: string; id: string }
> = async ({ token, id }: { token: string; id: string }) => {
  try {
    const url = `${BaseURL}/user/remove-sub-admin/${id}`;

    const response = await axios.delete(url, { headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    
    console.log("Error in FetchSingleUser:", error);

    
    throw new Error(
      error.response?.data?.message || "An error occurred while fetching users."
    );
  }
}

// add sub Admin with first name last name email phone location  dob: "", password: "",
      

export const  AddingSubAdmin: MutationFunction<
  unknown,
  { token: string; firstName: string; lastName: string; email: string; phone: string; location: string; dob: string; password: string; }
> = async ({ token, firstName,lastName,email,phone,location,dob,password }: { token: string; firstName: string; lastName: string; email: string; phone: string; location: string; dob: string; password: string; }) => {
  try {
    const url = `${BaseURL}/auth/register-sub-admin`;

    const response = await axios.post(url,{firstName,lastName,email,completePhone:phone,location,dob,password},{ headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else if (response.status === 422 || response.status === 409) {
      console.log(response.data);
      
      throw new Error(response.data.message);
    } else {
      console.log(response.status);
      
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    
    console.error("Error in AddTrainer:", error);

    
    throw new Error(
      error.response?.data?.message 
    );
  }
}



// Fetching user terms and conditon API

export const TermsAndCondition: MutationFunction<
  unknown,
  { token: string; }
> = async ({ token }: { token: string; }) => {
  try {
    const url = `${BaseURL}/guideline/terms`;

    const response = await axios.get(url, { headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    

    
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while fetching trascation."
    );
  }
}

// Adding Terms And Condition API

export const AddTermsAndCondition: MutationFunction<
  unknown,
  { token: string; content: string; }
> = async ({ token,content }: { token: string; content: string; }) => {
  try {
    const url = `${BaseURL}/guideline`;

    const response = await axios.post(url,{content:content,type:"TermsAndConditions"},{ headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    

    
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while fetching trascation."
    );
  }
}

// PrivacyPolicy API
export const PrivacyPolicy: MutationFunction<
  unknown,
  { token: string; content: string; }
> = async ({ token,content }: { token: string; content: string; }) => {
  try {
    const url = `${BaseURL}/guideline`;

    const response = await axios.post(url,{content:content,type:"PrivacyPolicy"},{ headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    

    
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while fetching trascation."
    );
  }
}

// Get Privcay Policy API
export const Privacy: MutationFunction<
  unknown,
  { token: string; }
> = async ({ token }: { token: string; }) => {
  try {
    const url = `${BaseURL}/guideline/policy`;

    const response = await axios.get(url, { headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    

    
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while fetching trascation."
    );
  }
}


// fetch FAQ  API

export const getFAQ: MutationFunction<
  unknown,
  { token: string; }
> = async ({ token }: { token: string; }) => {
  try {
    const url = `${BaseURL}/guideline/faqs`;

    const response = await axios.get(url, { headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    

    
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while fetching trascation."
    );
  }
}


// Insert new FAQ where context first line will be the title 

export const InsertFAQs: MutationFunction<
  unknown,
  { token: string; content: string; }
> = async ({ token,content }: { token: string; content: string; }) => {
  try {
    const url = `${BaseURL}/guideline`;

    const response = await axios.post(url,{content:content,type:"FAQs"},{ headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    

    
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while fetching trascation."
    );
  }
}


// Fetch Interest 

export const FetchInterest: MutationFunction<
  unknown,
  { token: string; }
> = async ({ token }: { token: string; }) => {
  try {
    const url = `${BaseURL}/interests?limit=${1000}`;

    const response = await axios.get(url, { headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    

    
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while fetching trascation."
    );
  }
}

// Add Interest

export const addInterest: MutationFunction<
  unknown,
  { token: string; name: string; }
> = async ({ token,name }: { token: string; name: string; }) => {
  try {
    const url = `${BaseURL}/interests`;

    const response = await axios.post(url,{name:name},{ headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else if (response.status === 422 || response.status === 409) {
      console.log(response.data);
      
      throw new Error(response.data.message);
    } else {
      console.log(response.status);
      
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    
    console.error("Error in AddTrainer:", error);

    
    throw new Error(
      error.response?.data?.message 
    );
  }
}


// Delete Interest

export const DeleteInterest: MutationFunction<
  unknown,
  { token: string; id: string; }
> = async ({ token,id }: { token: string; id: string; }) => {
  try {
    const url = `${BaseURL}/interests/${id}`;

    const response = await axios.delete(url,{ headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else if (response.status === 422 || response.status === 409) {
      console.log(response.data);
      
      throw new Error(response.data.message);
    } else {
      console.log(response.status);
      
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    
    console.error("Error in AddTrainer:", error);

    
    throw new Error(
      error.response?.data?.message 
    );
  }
}


// Fetch Get all Communities 

export const GetCommunities: MutationFunction<
  unknown,
  { token: string; }
> = async ({ token }: { token: string; }) => {
  try {
    const url = `${BaseURL}/community?limit=${1000}`;

    const response = await axios.get(url, { headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {

    
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while fetching trascation."
    );
  }
}

export const DeleteCommunities: MutationFunction<
  unknown,
  { token: string; id: string; }
> = async ({ token,id }: { token: string; id: string; }) => {
  try {
    const url = `${BaseURL}/community/${id}`;

    const response = await axios.delete(url,{ headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else if (response.status === 422 || response.status === 409) {
      console.log(response.data);
      
      throw new Error(response.data.message);
    } else {
      console.log(response.status);
      
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    
    console.error("Error in Deleting Communites:", error);

    
    throw new Error(
      error.response?.data?.message 
    );
  }
}


// Add Community with title and Photo 
export const AddingCommunity: MutationFunction<
  unknown,
  { token: string; title: string; photo: File; }
> = async ({ token, title, photo }: { token: string; title: string; photo: File; }) => {
  try {
    const url = `${BaseURL}/community`;

    const formData = new FormData();
    formData.append("name", title);
    formData.append("image", photo);

    const response = await axios.post(url, formData, { headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else if (response.status === 422 || response.status === 409) {
      console.log(response.data);

      throw new Error(response.data.message);
    } else {
      console.log(response.status);

      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    console.error("Error in Adding Communities:", error);

    throw new Error(
      error.response?.data?.message
    );
  }
};
  

export const PostinCommunity: MutationFunction<
  unknown,
  { token: string; title: string; photo: File; }
> = async ({ token, title, photo }: { token: string; title: string; photo: File; }) => {
  try {
    const url = `${BaseURL}/post`;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("media", photo);

    const response = await axios.post(url, formData, { headers: { accessToken: token } });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else if (response.status === 422 || response.status === 409) {
      console.log(response.data);

      throw new Error(response.data.message);
    } else {
      console.log(response.status);

      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: any) {
    console.error("Error in Adding Communities:", error);

    throw new Error(
      error.response?.data?.message
    );
  }
}