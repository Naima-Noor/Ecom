import React from 'react';

function BlogPage() {
  return (
    <div>
      <section id="shopheader" className="blogheader">
        <h2>#Readmore</h2>
        <p>Read all the case studies about our product!</p>
      </section>

      {/* Main Blog Section */}
      <section id="blog">
        <div className="blogbox">
          <div className="blogimg">
            <img src="https://www.sewrella.com/wp-content/uploads/2020/10/TA5.jpg" alt="" />
          </div>
          <div className="blogdetails">
            <h4>Crochet Blankets</h4>
            <p>
              Blankets are one of the most popular crochet items, and for good reason. They are cozy, warm, and can be made in a variety of different styles and colors. You can create a simple blanket with a basic stitch pattern, or you can get creative and use different stitch patterns, textures, and colors to make something truly unique.
            </p>
          </div>
        </div>
      

        <div class="blogbox">
        <div class="blogimg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIc67eAVC5owt6NugHKMROkO1j8cQWjgUbuw&usqp=CAU" alt=""/>  </div>
        <div class="blogdetails">
            <h4>Crochet Scarves</h4>
            <p> Scarves are another great crochet item that can be made in a variety of different styles and colors. They are perfect for keeping warm during the colder months, and they can also be a great accessory to add some color and style to any outfit.</p> </div>
    </div>

    <div class="blogbox">
        <div class="blogimg">
            <img src="https://images.immediate.co.uk/production/volatile/sites/32/2021/02/How_to_make_amigurumi-dbf0f6f.jpg?quality=90&resize=768,574" alt=""/>  </div>
        <div class="blogdetails">
            <h4>Crochet Amigurumi</h4>
           <p> Amigurumi is a Japanese crochet technique that involves creating small stuffed animals or dolls. These adorable creations can be made in a variety of different shapes and sizes, and they are a great way to practice your crochet skills while also making something cute and fun</p> </div>
    </div>

    <div class="blogbox">
        <div class="blogimg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zXBLG4qLzQQ8_P6h0UheM6E_J58bqi1eMQ&usqp=CAU" alt=""/>  </div>
        <div class="blogdetails">
            <h4>Crochet Hats</h4>
            <p>Hats are another popular crochet item, and they can be made in a variety of different styles and colors. From simple beanies to more complex designs, hats are a great way to keep your head warm while also adding some style to your outfit</p>  </div>
    </div>

    <div class="blogbox">
        <div class="blogimg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLaFdDpVs92FEoYGr2LaJBvu3xO_t82WOYw&usqp=CAU" alt=""/>  </div>
        <div class="blogdetails">
            <h4>Crochet Bags</h4>
            <p>Crochet bags are a great way to add some color and style to your everyday wardrobe. They can be made in a variety of different shapes and sizes, and they are perfect for carrying all of your essentials.</p> </div>
    </div>
        {/* Add the remaining blog boxes here */}
        {/* ... */}

      </section>

    </div>
  );
}

export default BlogPage;
