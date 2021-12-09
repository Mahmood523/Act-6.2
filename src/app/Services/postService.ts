
import { Post } from "src/post";

export class PostService{
    posts:Array<Post> =[
        { title: 'Mon premier post' , 
          content:'fsqgfqsdg  fsqgfsd fgqfg fqggyjuyiestgf taqeujqh thtg',
          loveIts:0,
          created_at: new Date ('10/24/2017, 11:00')},
        { title: 'Mon deuxième post' ,
          content: 'fsqgfqsdg  fsqgfhcvfqggyjuyiestgf taqeujqh thtg',
          loveIts: 0,
          created_at: new Date ('10/24/2017,11:00') },
        { title: 'Encore un post' ,
          content: 'fsqgfqsdg  fsqgfsd fgqfg fqggyjuyiestgf taqeujqh thtg',
          loveIts: 0,
          created_at: new Date ('10/24/2017,11:00')}
      ];
      color ?: boolean;

      getPostbyTitle(title: string){
          const post=this.posts.find(
              (postObject)=> {
                 return postObject.title === title;  
              }
          );
          return post;
      }

      addPostToPosts( title: string, content: string, loveIts:number,createdAt:Date){
          const postToAdd: Post={
            title:'',
            content:'',
            loveIts:0,
            created_at: new Date,    
          };
          postToAdd.title=title;
          postToAdd.content=content;
          postToAdd.loveIts=loveIts;
          postToAdd.created_at=createdAt;

          this.posts.push(postToAdd);
          

      }

      turnGreen(){
        return this.color=true;
      }
      turnRed(){
        return this.color=false;
      }
      
}