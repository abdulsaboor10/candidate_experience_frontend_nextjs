import Experience from "../_components/Experience"

export interface CandidateType {
    id: number,
    name: string,
    dob: string,
    phoneNo: string
}

export interface ExperienceType {
    "id": number,
    "title": string,
    "companyName": string,
    "startDate": string,
    "endDate": string
}

export interface CandidateWithRecentExperienceType extends CandidateType{
    experience : ExperienceType
}
export interface CandidateWithExperiencesType extends CandidateType{
    experience : ExperienceType[]
}

export interface PageableSortType {
    "empty": boolean,
    "sorted": boolean,
    "unsorted": boolean
}


export interface PageableType {
    "pageNumber": number,
    "pageSize": number,
    "sort": PageableSortType,
    "offset": number,
    "paged": boolean,
    "unpaged": boolean
}

export interface PageableDataType {
    "pageable": PageableType,
    "totalPages": number,
    "totalElements": number,
    "last": boolean,
    "size": number,
    "number": number,
    "sort": PageableSortType,
    "numberOfElements": number,
    "first": boolean,
    "empty": boolean
} 

export interface CandidateListType extends PageableDataType{
    content : CandidateType[]
}