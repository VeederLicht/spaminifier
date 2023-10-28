'use strict';


console.log('Start of smalltest2.js...')

let ClickSound1 = new Audio('audio/clicksound1.opus');
ClickSound1.loop = false;

setTimeout(() => {  // otherwise smalltest1.js will be quicker with evaluation
    let TheOne = document.getElementById('someamazinglylongbuttonid')
    console.log(TheOne)
    TheOne.addEventListener('click', () => {
        ClickSound1.play()
        console.log("You clicked me!!")
    })
}, 1000);


/*
None of this comment should carry over to the output file:
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla molestiae ab incidunt cumque ullam reiciendis consequuntur voluptatum error? Consequatur nobis laudantium quas itaque? In eveniet eos excepturi, ipsa explicabo neque quaerat pariatur obcaecati commodi a velit maxime, exercitationem facere eligendi aliquid quas ea aliquam alias beatae nobis. Sapiente adipisci culpa maiores neque quis tenetur sunt dolorum, totam atque provident sint porro deleniti distinctio laudantium, minima qui iste nihil itaque, delectus quos omnis repellat suscipit. Expedita inventore repellendus vitae adipisci voluptate atque, dignissimos magni repudiandae incidunt ad ullam rem unde excepturi cumque corrupti illum blanditiis illo optio molestias nemo voluptates.
Consequuntur consectetur eos nihil totam, dolore veniam possimus ducimus molestias, velit, facere aliquid repellat debitis omnis et ad distinctio quasi nemo commodi sit vel at. Ullam, porro doloremque corporis quo molestias libero blanditiis atque hic. Ea eaque amet harum adipisci magni dignissimos ad eos, qui beatae ut sapiente tempore quas? Voluptatem quia minus, quisquam dolor cumque, itaque fugiat repellat enim optio hic tempora laboriosam. Temporibus ratione, nisi commodi quaerat vitae iusto eius totam dolore facilis molestiae? Ad eum est exercitationem dignissimos veritatis animi quo voluptatem et doloremque fugiat, officiis ab. Deserunt voluptas quasi quas sed, reprehenderit dolores aliquam maiores enim?
Enim dolore ut, perspiciatis quia magnam non dignissimos doloribus rem asperiores mollitia porro ad voluptates fugit atque corrupti eos. Doloribus ipsam nesciunt at beatae! Hic dolor dolorum exercitationem commodi ipsa veniam itaque est esse, vitae libero, quam ab doloribus dolores magnam voluptatem animi. Adipisci, voluptas quam explicabo iure quisquam harum tempora vero aliquam, accusantium necessitatibus eligendi possimus. Architecto repellendus error non molestias quibusdam hic magnam iste, esse eligendi explicabo facere mollitia et porro perferendis adipisci impedit quia. Labore quam saepe eaque sed! Repellendus ut tempora veniam iste debitis, fugit nobis beatae iusto dolores minima autem excepturi illum explicabo. Illum, cumque?
Beatae ipsa inventore maxime tempore fugiat in dicta esse officia facere illum facilis perferendis consectetur animi, tempora porro fuga iure eaque repudiandae, repellat temporibus non odit. Perferendis iste doloribus omnis blanditiis, tempore sit ex. Quod harum quae rem aspernatur, cum molestiae eaque accusantium ullam, commodi sunt officiis repudiandae, quo consectetur sed repellat alias animi nam? Sunt dolores autem et rerum? Expedita neque provident aliquid ducimus! Consectetur laboriosam iste nisi reprehenderit eligendi laborum accusamus, ad debitis sit ducimus eos saepe rerum ipsam velit sed soluta magnam repellat vero culpa? Omnis adipisci totam consectetur illo sed, error blanditiis voluptates excepturi iusto ea!
Est modi blanditiis a architecto minus doloribus beatae dolorum consequatur quia, quod in ullam? Nobis aperiam nam quae, quod doloremque quibusdam dicta sit eos vel? Atque ea, esse sapiente rem dolores odio fugit sunt tempore sit. Quasi, ad! Aliquid, labore quos iusto, praesentium itaque consectetur voluptatibus optio velit at reiciendis, nobis voluptatem dolorem veniam accusamus omnis delectus id laborum corrupti! Nisi error dolorum cum, explicabo aliquam in dignissimos voluptatibus eos aspernatur quo veniam adipisci quaerat debitis vitae, facere voluptatem hic maxime architecto nihil? Enim maiores vero deleniti unde accusantium laborum provident ipsa minima quos, hic voluptates omnis sapiente perspiciatis vitae?
*/