export interface IData {
  id: number;
  username: string;
  nome: string;
  email: string;
}


export interface IPhotoGet {
  id: number;
  acessos: string;
  author: string;
  date: string;
  idade: string;
  peso: string;
  src: string;
  title: string;
  total_comments: string;
}


export interface Comments {
  comment_ID: string;
  comment_agent: string;
  comment_approved: string;
  comment_author: string;
  comment_author_IP: string;
  comment_author_email: string;
  comment_author_url: string;
  comment_content: string;
  comment_date: string;
  comment_date_gmt: string;
  comment_karma: string;
  comment_parent: string;
  comment_post_ID: string;
  comment_type: string;
  user_id: string;
}

export interface IPhotoGetId {
  photo: IPhotoGet;
  comments: Array<Comments>;
}

export interface IUserStatisData {
  acessos: string;
  id: number;
  title: string;
}
