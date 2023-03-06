import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData, useParams } from '@remix-run/react';
import { db } from '~/utils/db.server';

export const loader = async ({ request, params }: LoaderArgs) => {
  const channel = await db.channel.findUnique({
    where: {
      id: params.channelId,
    },
    include: {
      messages: {
        include: {
          sender: true,
        },
      },
    },
  });

  return channel;
};

const Channel = () => {
  const channel = useLoaderData<typeof loader>();

  return (
    <div className='flex-1 flex flex-col w-full overflow-hidden'>
      <div className='w-full p-4 border-b-[1px] border-b-zinc-800 shadow-md'>
        <h2 className='text-l font-bold'>{channel?.title}</h2>
      </div>
      <div className='flex-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-600/50 scrollbar-h-12 scrollbar-rounded-full px-4'>
        <div className='py-4'>
          <div className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            dignissimos provident repudiandae culpa delectus officiis voluptas
            quam veniam enim nam quidem ipsum? Error eius cumque, quas eligendi
            dignissimos quam? Odio. Aut expedita, repellendus maiores ducimus,
            voluptatum dolorum architecto suscipit similique dolorem ex dolore
            delectus ad fugiat officia maxime, inventore rem iusto ipsa
            repudiandae hic autem non velit at neque. Ab. Eveniet eligendi
            praesentium expedita delectus consequatur repellat quos aut vero non
            in iure recusandae tenetur, modi itaque nam debitis repudiandae
            porro asperiores quis temporibus consectetur aperiam exercitationem
            explicabo officiis? Necessitatibus. Tenetur recusandae cum error
            asperiores! Officia totam nemo vero laudantium a quibusdam
            provident? Dolor distinctio iste, libero inventore vel officia
            laboriosam ea, esse blanditiis debitis reprehenderit quam! Officia,
            eius provident. Illo nemo voluptatibus, odit, cupiditate rerum
            voluptate ratione eum maxime laudantium ex hic beatae voluptatem
            eligendi autem nulla sapiente repellendus voluptatum cumque aperiam
            sed. Cupiditate quas repellendus eveniet quae ullam? Eos suscipit
            illum temporibus, inventore, est nulla a natus cupiditate aut id
            beatae voluptatum laborum rem sunt quibusdam minima dolor.
            Consequatur eligendi, nisi omnis voluptates dignissimos veniam
            perferendis asperiores quibusdam. Repudiandae nulla repellendus
            assumenda odio debitis incidunt molestiae fugiat repellat explicabo
            aut at expedita cupiditate maiores eos quis doloremque voluptate
            nihil aliquam cumque, sequi aspernatur alias. Tempore praesentium
            mollitia repellendus. Incidunt, ea modi. Vitae natus eveniet in
            culpa debitis sit error neque porro blanditiis velit rem
            voluptatibus fugit, ratione magni placeat explicabo harum numquam
            dolorum a quaerat! Dolores, error dolor? Odio laudantium ullam
            veritatis neque sequi commodi? Possimus sint quibusdam, rem debitis
            sapiente maiores accusantium iusto inventore eius iste perferendis
            eligendi commodi nobis accusamus tempore doloremque. Tenetur aut
            magni facere? Enim aliquam maxime autem et dolor accusantium minus
            odio, quo perspiciatis doloremque voluptas dolores, consectetur
            laudantium molestias est ad minima tempore. Totam commodi
            reprehenderit itaque? Ratione similique dicta et quibusdam.
            Consequatur recusandae sint, maiores repellat, laborum illo sed
            laboriosam nam provident, dignissimos autem nisi perspiciatis earum
            alias enim? Vero neque illum qui beatae, dicta fuga. Pariatur nam
            atque porro quas! Qui voluptatem officiis iste facere consequatur
            necessitatibus modi! Perspiciatis fugit ab, nesciunt ipsa tenetur
            aut eligendi? Deserunt iusto ex, hic fugit ea, autem, laboriosam
            quibusdam numquam temporibus quisquam atque placeat? Non iure facere
            autem deleniti recusandae eos corrupti aperiam quisquam repellendus
            repudiandae? Dolorum non sit maxime sequi quidem porro quas
            perspiciatis tempore ipsam fugit eius, minus et similique itaque
            suscipit. Cupiditate sint saepe laudantium reiciendis explicabo
            animi! Iusto maiores labore dolorem asperiores libero quas veniam,
            repellendus alias eligendi quasi incidunt reprehenderit aut facere
            ut ipsum sunt corrupti vero nesciunt. Iusto! Ipsam nulla incidunt
            quam minima hic earum. A porro saepe, asperiores recusandae optio
            nisi amet neque enim quo omnis quae tenetur exercitationem natus?
            Dignissimos blanditiis obcaecati nulla minima cupiditate similique?
            Illo ex dolores deleniti error quis nesciunt ducimus magnam eos est
            minus, nostrum mollitia corrupti dolor accusantium natus harum, iste
            sunt similique ab a ut possimus laborum. Fugit, iusto sunt. Nesciunt
            perspiciatis vel molestias omnis, ipsum veniam aliquid alias dolor
            impedit facere. Alias consequatur iusto quis accusantium dolores
            rem, ullam sint rerum corrupti a laboriosam consectetur dicta,
            distinctio fugit harum. Assumenda eum id repellendus excepturi nam
            ea unde quisquam repellat sapiente soluta, voluptates fugiat
            adipisci possimus facilis rem nostrum libero placeat animi
            repudiandae obcaecati sunt sit! Autem id nobis voluptas! Similique
            dicta neque, consectetur eius alias accusamus nam in repudiandae
            doloribus recusandae reprehenderit eligendi mollitia tempora,
            possimus delectus totam eos dolores ut libero perspiciatis! Corporis
            similique aliquam fugiat sint voluptatem. Voluptatum beatae
            provident dolores harum nesciunt rem exercitationem incidunt
            cupiditate. Quod nobis tempora nam architecto voluptas, mollitia
            praesentium, error voluptatibus consequuntur facilis dolor amet
            voluptatum quis dolores possimus itaque beatae! Inventore, dolorem!
            Quibusdam, laborum possimus. Dolor quia unde harum iste recusandae
            rem in debitis. Ab dolore, impedit tempore minima necessitatibus vel
            suscipit aperiam corrupti corporis in, enim quia sequi vitae. Unde
            laborum obcaecati minima eius illum, pariatur dolorem, cum labore,
            maxime harum minus cumque ipsa vitae eum? Deserunt cumque,
            perferendis fugit vero sed harum optio ea est quaerat consequatur
            repudiandae! Non atque autem harum dolore dignissimos, distinctio
            quo omnis, quidem facilis magni accusantium libero eos earum, ea
            asperiores architecto laboriosam illo fugiat? Beatae quasi
            reprehenderit nisi? Numquam ipsum perspiciatis sint! Ratione ad a
            non magnam, placeat repellat, quibusdam exercitationem quas laborum
            nobis expedita laboriosam quaerat quisquam nisi. Eveniet voluptas
            doloremque facilis nihil est quibusdam omnis, unde obcaecati, fuga,
            minus repellat? Quia culpa ipsa doloribus quisquam, consectetur sunt
            eius iste voluptates pariatur quas distinctio explicabo. Assumenda
            velit quam in vel libero tempore atque iste ea soluta nihil. Quos
            dignissimos dolorum eaque. Facere officia amet accusantium veniam
            maxime qui voluptas, quasi itaque ea nesciunt vitae laudantium
            molestiae at saepe rerum sed, animi nulla? Illum consequuntur
            voluptates corporis beatae nostrum nesciunt in maiores? Quo dolor
            suscipit esse hic perferendis debitis rerum repellat sequi
            laudantium, magnam architecto quis! Inventore, nesciunt quibusdam
            harum voluptates ratione alias numquam in possimus voluptatum.
            Aperiam quibusdam dignissimos esse nemo? Mollitia fugiat molestias
            totam id reiciendis magni blanditiis quis debitis voluptas tenetur
            deserunt laboriosam deleniti non, alias nulla autem ea nemo maxime
            ab illum repellat recusandae aut neque? Officia, architecto. Error
            numquam exercitationem impedit distinctio voluptatum officiis quia
            labore quas culpa adipisci, doloribus odit animi rerum magnam
            perferendis laborum ad, earum itaque dolor fuga non assumenda. Quasi
            nulla mollitia excepturi! Labore neque unde quia id repellat,
            nesciunt quidem placeat tenetur at quibusdam saepe esse suscipit
            consequuntur nemo quo soluta molestiae mollitia rerum eum
            perferendis assumenda harum libero, odio explicabo. Facere. Qui sed,
            facilis provident magnam consequuntur, culpa corrupti officia quo
            quis iste cum laudantium recusandae quas aliquam animi
            exercitationem suscipit dolorum minima harum beatae optio quos nemo
            eaque! Nulla, dicta! Magni necessitatibus pariatur sint accusantium,
            fuga distinctio delectus repellat iure reiciendis beatae quaerat aut
            dolorem placeat rem earum hic magnam nemo. Mollitia repudiandae
            dolorum excepturi? Reprehenderit aut natus nostrum repellat. Quo
            repellat debitis error possimus autem nostrum reprehenderit. Amet
            consequuntur adipisci unde officiis quia consectetur, suscipit,
            blanditiis voluptas debitis inventore atque aut nostrum vero illum
            quidem labore harum reprehenderit modi? Eaque, itaque error odit
            commodi sit reiciendis debitis, odio labore vel fugiat delectus?
            Dignissimos corrupti repudiandae cum reprehenderit ducimus ipsam,
            placeat nostrum beatae non aliquam quod vel quia nobis enim!
            Cupiditate nam ex eos inventore dolorum reprehenderit corrupti rem
            molestiae, nemo harum commodi consequatur itaque? Placeat delectus
            debitis possimus, provident saepe, veritatis eos eius, doloribus est
            fugiat ipsum! Ipsum, quidem. Sint ipsam, necessitatibus voluptate in
            consectetur nobis repellendus vero doloribus vitae distinctio earum,
            quis officia id vel, odio deleniti soluta sapiente dolore ipsum
            temporibus nulla. Maxime cum enim consequatur similique. Porro
            voluptatum doloremque laboriosam eum eligendi accusamus recusandae
            ea, optio nihil ipsa accusantium suscipit cumque libero quia quod
            minima vel? Recusandae, reprehenderit veniam sed atque tenetur omnis
            at quaerat eum? Aut, dignissimos! Aperiam nam vitae, sed
            voluptatibus aut harum, obcaecati assumenda voluptatem error illo
            voluptates non. Aut magnam necessitatibus perferendis commodi
            mollitia dolores quas esse ducimus, ad alias, quam reiciendis!
            Facere debitis, beatae blanditiis libero minima voluptatem maxime
            suscipit sed corrupti ipsum ad dolores, nobis eos dolorum iure
            voluptate amet cum quam soluta nostrum excepturi eius dolorem?
            Praesentium, tempore quis! Eum itaque illo incidunt eveniet
            excepturi molestias? Similique quia culpa velit voluptatibus? Id
            ducimus mollitia totam dolor sunt, nostrum voluptate iusto eveniet
            quae error, ullam quia necessitatibus, explicabo corporis quisquam?
            Veniam voluptates qui soluta natus dolor modi mollitia! Rem
            reprehenderit aliquam sequi nemo repellendus ea earum illum ex,
            itaque, veniam, obcaecati laboriosam praesentium debitis iusto
            temporibus mollitia quis vero. A. Aliquid, eligendi! Iure fugiat
            quia temporibus aliquid voluptatem corrupti sit, esse dolores,
            adipisci quae error! Tempore illum neque officia debitis non sunt
            explicabo? Explicabo sed dolor vel dolorem modi sapiente. Similique
            perspiciatis ducimus iste quasi atque accusamus, repellat doloribus
            hic, rem molestiae unde, saepe earum tenetur quos excepturi aliquam
            odio blanditiis. Mollitia inventore esse fugit id vel consequatur
            voluptatum praesentium. Veritatis minima, vel ducimus numquam
            temporibus repudiandae nisi esse, autem saepe fuga ad placeat. Esse
            possimus voluptates blanditiis, error exercitationem ipsam? Possimus
            adipisci suscipit, deserunt quidem asperiores neque quae dolorem.
            Maxime accusamus possimus praesentium. Consequatur libero eaque
            expedita enim, repellendus aspernatur sit! Possimus, porro?
            Doloremque repudiandae totam omnis, porro veritatis nesciunt
            similique debitis enim provident ipsam voluptatum eius labore
            laborum. Ullam voluptates aliquid reprehenderit optio, pariatur
            vitae maiores dicta. Labore porro cum libero facere iste cupiditate
            rem eum, explicabo maiores delectus ipsa repellat pariatur quas
            earum aperiam alias dolore veritatis. Praesentium officia velit, ex
            quisquam cupiditate dignissimos fuga animi, sed facilis ad odit
            exercitationem obcaecati natus ipsa repudiandae molestiae laborum
            consequatur facere perspiciatis aliquam laudantium quod, tenetur
            itaque. Odit, in. In dolorem, neque quam aliquam ad mollitia
            excepturi assumenda expedita illo provident cum delectus deserunt
            velit, possimus odit, minus optio asperiores eligendi voluptatem
            sunt nemo? Molestias, repellendus non! Ad, harum? Fugit recusandae
            impedit praesentium repellat, sunt odio quis quam minus ullam,
            blanditiis rem, officia velit voluptatibus sapiente pariatur quia
            soluta ducimus saepe? Omnis ab, quas possimus libero voluptatibus
            quidem nam. Sunt accusamus ipsum veritatis officiis autem quisquam
            numquam similique, reiciendis neque quod facere voluptates quaerat
            distinctio quibusdam accusantium vel est id delectus! Fugit iste
            recusandae dignissimos rerum repellendus, voluptas quibusdam. Quas
            veritatis quidem numquam ratione, consequuntur ullam error ad
            provident praesentium reprehenderit tempore animi est et, assumenda
            voluptatibus molestias corporis! Quo quis nostrum vel reprehenderit
            vero ex fugiat laborum tenetur! Distinctio suscipit placeat
            reiciendis maxime pariatur obcaecati ex sint corporis totam dolores
            dignissimos cumque unde, rem consequuntur vitae minus! Recusandae
            quam explicabo ipsum aliquam, dolore quidem repellat quisquam
            repellendus necessitatibus. Ullam alias provident deserunt
            distinctio voluptatem. Hic dolores error quam dolore, quibusdam
            facere explicabo nihil pariatur tenetur, repellendus veniam optio
            tempora inventore? Possimus tenetur distinctio neque velit sequi eos
            natus! Perferendis iure facere minus, aliquam illo esse deserunt
            quia consequatur magni adipisci doloremque, unde et earum quae
            suscipit a quis fugiat beatae commodi, officia eius expedita culpa
            vel nisi! Reiciendis. Non fugit quibusdam exercitationem veniam
            corrupti id aut nostrum cum soluta necessitatibus consequuntur
            aperiam quia laboriosam perferendis reiciendis eaque ullam at
            dolores animi tempore, praesentium ut rem nisi sapiente! Quidem.
            Repellendus exercitationem, ipsa minus sed amet ex vero, atque omnis
            odit corporis aliquam tenetur dolorem voluptas vel? Fugit minima ab
            modi sunt facere animi saepe in accusamus doloribus eum. Vero? Amet
            minima esse error harum, cum corporis omnis. Quo ab vel
            reprehenderit minus, aliquam voluptas libero accusantium doloremque
            voluptatem sint quae ut, iste porro, quaerat officia quisquam
            recusandae rem quibusdam. Aut sint molestias vitae consequuntur
            laborum, voluptas dolorem consequatur! Ipsam, quis. Distinctio,
            eaque quidem aliquid natus perferendis maiores ut est numquam saepe
            doloremque commodi sequi mollitia recusandae explicabo reprehenderit
            hic. Sed a facere amet iusto aliquid tenetur dolores quae incidunt
            omnis quidem ipsa sint, molestias vero adipisci magnam dolorum sequi
            at totam beatae alias rem! Id, assumenda maxime! Consequatur, natus?
            Cupiditate architecto dolores provident assumenda tempore veritatis
            non ipsa blanditiis necessitatibus ea sapiente et odio enim placeat
            minima commodi ratione ipsum dignissimos, molestias repudiandae
            suscipit tenetur repellat earum dolorum. Reprehenderit? Quidem
            aliquid consequuntur blanditiis quisquam nesciunt delectus pariatur
            ab ipsum nemo numquam ad, placeat autem, reiciendis beatae? A
            nostrum, quibusdam natus, vitae deleniti corporis in quod quo quis
            facilis dolor. Cumque animi, dolor incidunt architecto officia magni
            perspiciatis sunt tempore maxime, consequatur adipisci earum? Culpa,
            illo veniam aliquam molestiae laboriosam modi eum pariatur
            repudiandae cumque distinctio. Vero ipsum repudiandae officia? Unde
            quasi vitae vero ipsa qui reprehenderit aperiam nobis, voluptas
            omnis veritatis distinctio repellendus voluptatibus earum laudantium
            optio, doloribus eveniet provident odio? Quaerat sint distinctio hic
            ipsam enim repellat necessitatibus. Distinctio amet quae ab enim
            corrupti in magni blanditiis vitae at aliquid soluta expedita vero
            quas quidem, ratione autem incidunt ea libero cum rerum nobis
            debitis praesentium illo dolores? Soluta? Sed quod, pariatur, dolore
            quae temporibus nihil aperiam numquam fugit officiis totam nulla!
            Officia impedit ab quaerat velit alias! Nulla sapiente tempora id
            veniam et qui laborum? Doloribus, adipisci repellendus! Ullam,
            reprehenderit enim facere, debitis quas aspernatur praesentium
            consequatur, nesciunt dolores cum vero. Fuga doloremque omnis beatae
            tempore facere, ratione perferendis ad porro quam iure atque debitis
            expedita dolore quia. Perferendis totam fuga unde ut, ratione
            accusamus in ipsum dignissimos. Reiciendis voluptas, iusto qui,
            magni dolor id voluptatibus nostrum ipsum voluptate sapiente
            consequuntur officiis quae. Doloremque velit cumque deleniti itaque.
            Enim, minus aliquid! Voluptate et esse optio magnam ipsa distinctio
            deserunt a vero culpa mollitia, pariatur quam doloribus illum
            laborum odit tempora rerum expedita ullam minus quas magni,
            exercitationem quibusdam? Autem delectus nulla debitis nisi optio
            laboriosam quia repudiandae earum repellendus repellat recusandae,
            esse quam alias illo magnam obcaecati quae necessitatibus sit.
            Numquam quisquam corrupti distinctio culpa officia, consequuntur ad!
            Doloribus ea impedit ad rem optio facere magni tenetur nisi, dolore
            repudiandae deserunt, exercitationem dolorum nobis delectus quaerat
            non blanditiis sapiente. Iste, cumque adipisci. Sapiente molestiae
            beatae porro velit. Eius? Iste, optio tenetur. Assumenda laboriosam
            repellendus tempore facilis, expedita officiis nobis quas
            repudiandae voluptas a veritatis labore ipsum magnam officia
            adipisci accusamus iusto. Asperiores dolorem quod delectus, rem
            commodi nobis. Ab sed non illo eum aperiam quaerat, eaque sequi unde
            perferendis natus placeat ipsum facere veniam tenetur. Ex quisquam
            dolor nesciunt rem vero, aliquam commodi quod earum nisi, iure
            eaque? Ratione accusamus rem provident quas id officiis error sit
            dolores atque voluptatibus blanditiis repellat dolore, quia quidem
            labore saepe voluptatem, voluptatum mollitia! Earum accusamus fugiat
            laudantium iure. Expedita, non maxime! Sequi est eius, fugiat
            repellendus commodi sint veniam reprehenderit voluptates quaerat
            temporibus iure recusandae, possimus quidem optio deserunt omnis
            nostrum a, aliquid delectus id ipsa modi iste! Libero, aliquid
            ipsum? Nihil repudiandae odio velit, id repellendus iste vero fuga
            in totam et deleniti similique, eum ipsa aliquid facilis. Quam
            dolorem amet aut est et laborum sint repellendus sapiente, quis
            temporibus? Iusto inventore voluptas nulla sunt est ullam impedit a
            facere quisquam voluptatum laudantium vero tempora vitae ad, maiores
            incidunt ipsa expedita blanditiis sed corrupti eligendi deserunt
            rem. Dolorum, blanditiis vitae. Cupiditate ad dicta magni
            voluptatibus veritatis minima consequatur nobis illo quas inventore
            neque nulla sed quae animi, tempora itaque quaerat accusantium?
            Expedita ea est fugit quam? Sint suscipit libero tempora.
            Repudiandae, nihil? Inventore, mollitia. Nisi repudiandae nemo
            voluptatem distinctio optio dolores fugiat reprehenderit impedit
            accusantium? Ducimus repellat, corrupti earum velit ea quis maiores
            cumque nisi tempore numquam id veritatis sapiente! Suscipit
            laboriosam, consequuntur, non architecto magni iste numquam,
            repudiandae magnam eligendi recusandae placeat? Laborum iste
            voluptates hic quia nesciunt ipsa! Inventore obcaecati soluta harum
            in amet corporis et dolore necessitatibus. Obcaecati ad, tempore
            alias, voluptate omnis molestiae quae minima debitis neque quam
            atque sit dignissimos accusamus odio. Suscipit iure impedit placeat
            quisquam quaerat et, dolor nemo distinctio, enim fugiat voluptates.
            Repudiandae, saepe, commodi enim sapiente molestias debitis officia
            impedit, blanditiis doloribus dicta distinctio? Adipisci
            voluptatibus cumque nihil, eveniet quibusdam voluptatum, quo maxime
            temporibus reiciendis nam illum asperiores quod deserunt
            perferendis? Quidem nemo dolorem voluptates! Voluptatibus deleniti,
            veniam eligendi eos omnis earum vitae laborum? Labore, nisi! Quod
            esse cumque nisi, doloribus fugit a, possimus exercitationem
            asperiores at perspiciatis aut inventore ipsum? Quae, repudiandae
            praesentium. Natus quidem sapiente maiores aliquid fuga sint
            laudantium! Iure, culpa? Similique dolorem, dicta quae minima
            repellendus natus ipsa consequatur fugiat sapiente obcaecati
            veritatis incidunt dolores et possimus! Nulla eum repellat
            aspernatur? Laboriosam distinctio sunt quos placeat vitae commodi
            expedita libero cupiditate. Atque voluptatum placeat quasi beatae
            vel, itaque debitis ipsum! Delectus quod voluptatem quis, sint
            obcaecati recusandae. Culpa, sapiente ratione. Sunt architecto modi
            veniam corporis. Fugit iste dolores adipisci cupiditate veniam magni
            omnis sunt quo vel fuga ipsa et, ex assumenda suscipit accusantium
            nulla repudiandae, officiis aliquid. Recusandae, magnam distinctio?
            Tenetur corrupti, error iure magni eaque sit amet aliquid,
            voluptates officiis, quis obcaecati temporibus. Inventore,
            assumenda? Officia doloribus repellat dolorem fugiat assumenda fugit
            amet vero, cupiditate sed? Esse perspiciatis, totam cupiditate illo
            velit eveniet nisi ipsa nostrum iusto, at quia ex incidunt,
            accusamus eaque facere eum aspernatur nam vitae omnis veniam
            delectus nesciunt! Voluptate fugiat enim tempore. Ipsam iusto
            asperiores alias totam, dolore iste deleniti fugiat harum a
            accusamus perspiciatis assumenda numquam iure deserunt corporis
            aliquam commodi dolorum blanditiis, recusandae adipisci. Cupiditate
            ut perferendis soluta excepturi nihil. Molestias sequi unde impedit,
            totam, numquam id magni quisquam provident accusantium officia
            repellat labore ea quae tempore assumenda aperiam accusamus atque
            enim reiciendis et neque optio quod. Quasi, eius perferendis.
            Praesentium fuga quam exercitationem minima odio pariatur ratione
            illo dicta commodi nihil doloremque, porro, enim ea corrupti dolorum
            nam veritatis laborum. Fuga, nihil voluptatum praesentium illum
            similique enim necessitatibus incidunt. Magni accusamus quasi qui
            recusandae saepe! Velit perferendis nihil facilis quasi ut delectus
            ex quas quis officia porro, deleniti cupiditate molestiae? Molestiae
            quod, laboriosam harum sapiente obcaecati iure dolorum error!
            Laudantium impedit aut nulla unde ab temporibus eveniet quos, atque
            porro voluptate aperiam cupiditate, in nobis quaerat quis
            necessitatibus? Illum saepe architecto neque ipsam reprehenderit
            earum culpa assumenda, autem corrupti? Aliquid, atque quidem odio
            error laboriosam cumque temporibus sint dolorum inventore modi
            veritatis molestiae quod. Distinctio molestias eius fuga earum
            corporis accusantium? Non ipsum, repellendus dicta rerum nostrum
            corrupti necessitatibus. Molestiae saepe ducimus in voluptatem, odit
            nesciunt eaque autem obcaecati deserunt blanditiis iure, beatae
            commodi. Numquam cum nam, perspiciatis facere sequi, harum libero
            amet quasi neque hic odit repudiandae eligendi? Maxime laboriosam,
            repellat qui ducimus minima, in molestiae voluptatibus aut quos
            neque adipisci vitae aliquid error quibusdam fugit minus.
            Repudiandae ipsum ab sunt maiores soluta similique praesentium
            consectetur obcaecati vitae. Molestiae dolores nemo minima aut
            incidunt nam illo repellat eaque, ea ex minus at delectus laudantium
            quidem omnis repellendus, impedit voluptate, ipsum sunt? Quod dolore
            temporibus earum ipsam, ex optio. Iure, pariatur! Debitis fuga
            reprehenderit dolore suscipit explicabo expedita ea, vero nisi,
            vitae aliquid in id rem iusto itaque? Corrupti accusamus deserunt
            nulla nihil eligendi explicabo? Sequi autem officia excepturi! Quos,
            ipsam saepe veniam at dolorum nisi fugit ipsum doloribus earum
            tempore ratione delectus dolores quo omnis quaerat beatae dolor iste
            quisquam nostrum expedita sit maxime est ea quidem! Sint? Itaque
            quisquam et facilis. Nemo itaque deserunt velit, ad corporis
            blanditiis aspernatur obcaecati, optio numquam cupiditate architecto
            consequatur? Officia in veritatis modi dicta, praesentium a sint
            aliquam exercitationem totam quia. Ex, eius rem beatae laudantium
            architecto dolorem excepturi placeat adipisci doloremque itaque
            nobis porro amet minus saepe est perferendis nam perspiciatis fuga
            vitae. Saepe dolores soluta doloribus voluptatum eum ea.
          </div>
        </div>
      </div>
      <div className='w-full p-4'>
        <div className='w-full bg-zinc-600 flex flex-row py-2 px-4 rounded-md'>
          <input
            className='w-full bg-transparent outline-none'
            placeholder='Send a message'
          />
        </div>
      </div>
    </div>
  );
};

export default Channel;
