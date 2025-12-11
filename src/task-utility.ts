type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

type PartialEdit = Partial<Post>;

type List = Pick<Post, 'id' | 'title'>;

type ReadonlyPublished = Readonly<Post>;