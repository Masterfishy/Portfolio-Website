import React, { useState, useEffect } from "react";
import "./Hero.css";
import { Button } from "../../components/Button";
import { DownloadButton } from "../../components/DownloadButton";

function Hero() {
  const [isMobile, setMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <div id="home" className="container hero__container">
        <div className="hero__body">
          <div className="secret">
            Hi Nappa, you found me! Checkout the website
            https://libraryofbabel.info/ . Go to Browse. Then copy and paste the
            following into Hex Name: (make sure you get all of it)
            1yejvkonysyc08y4ryu58nnimu7jcirhgr9tonwsi92206py7lw03lu9z3bua6oyotwoo6uvpn2yzrbmtomclo2mts6t2pkuas4pzi1slmhkzry4resq9yiveir368xj1zlgs7ub2f54jl49j718y1kblwzkyt276kn1x6bvca7ugm08cv4825aq9sjo2ykieydh56atxnqtxc2dj6af9bomfyka475fzp2jikuqxk0v12pj1yuod0t9g3y7ju7tiw03m4skgc10cmm5ip2dz2k5v5fglm983au9cp55n4o9atph3ezkjd4ev68edgosa8jzxrqo84rtykex7idy7ys816dh5xyn2891neisibr7m42p5ydlbjqiygxzrg6vm7tbl66s9vbodh7u8rmtiau6e5355sc4u4yz68tpwrv074kr3u4j99lm9ix77mrx6j5py6jm64wnlnyg1gije6oetxomb0kn2mp4u8o2juyhdhthgjzy3ljpddymyrjh2jtok9dwfxpjeunebpctx60ispf1c8c1zfqyjail1k7svhpqakpijg9lk846bqg1cvgo0tsbeo003nu1um67jjklutnpuc2m4hn52d73m3rtt74xfve58wa4sbe93vdhujecwvgzype6wqks70zq8yxgrqthzj9mj95zyup40f9fpjxkfngofnrrb0uvknholiaq2algsfxtvmoxsyja6rbh3cgouuaduxolq20s5fzmbyciuotdtqsw4gzv238c15xxq24tqpaxgzl2yontxf8vhw4kk2h2gk4acaoqk994g3fejq7cdcghsbqxpirtx2boij11xgl86nv4inu8ow3j3a1aai9jngbxp1qfytz261ju5om9gmb3ws71ryx3zds58a9unymbmgkazkzygiq0m64ffv3yp43up3imr05gu56mua8e68l9jftfifkqa286l9kj9dgp3ozhl0y3mct9eromxen5kdanqdb3qixexl8ecnfnsew54dqnne5cyo7ncmirui5577y8x85pw99sdvjnwkph6u5estg6pe4cygj1gbseae1kt0veom3d5tv4f3v4d7uazjtbtgffg86js05sl1xx7630lvqswqaw2uwy5to7e4hilbcwlynulx15ktwckxzy1fz0l8htwvolkv7ex3binf8rp03qi25ka0dgi366z1wll5z698wmlt4efdljrrjr9n3fqud2igoc05hizlu00uktenn3b7f5kr34wy8h0pajnry5n9ftm14m7uzgfecf8s3t6x6tbyruy22pousc01dl0xqy3239xneawhcurbt2wnjwlnkbkr628a0t1iu4nq5jk4qn41fefapeky9viuhzildu8ux75e2rmh7ylgswppjlf76jljmcjvdhtbvkd7le26dppuryotgewz2rpzure9ihpt5bssfq9t63t8u2ytapwqdhyf8qhh6kthaa5cvgokvcoc5z4skp1xs3ra1elgrthh6umgxcakpbs7wxf0yy2f1isflg7x7zxfg4o90dulllpwqgj9xghalw0ar3jbfin13za9vlkyuf30upwf8mmb2wsb17o3rggnrge7i78jy6xd6a8p7ygmux5uw9byi08pk3rbn4a2hqf95nezg14buckjslb721ve0ijxd1mbdallkmipyghihhgfgujnpp633oicfcpo4ngfm04gvt5nwsyes4sy680tdyqxrpc6lz0bbtoqxhvgbi6ublboy6a7d5wh7o86bs7rpj6yhdg2t1yfpjs7ocyeoa44wnoa2d716uvm1qqyo4dezo3nnhshl25ag3wvdwq1uwjn1uwd70rnx1s8cku2m31nr7og43zeng0hf2e1jocw5pry45bppjzi2on17y665s5qrn6lrx0jp9bd4pqhsri0heepr568z9p7dpvbiioptvdr6eu3jsm83fnbdzxfzb0polezibrt9iwyp6wre9rx63ybr8j9e4xun77ofi2pxrhpoje96cepocy6h3q6lf71taiz1ufvyytobipc4mgl521omwuk3mf7a6uofvrvbglf4rwli6y42x3fwrdvgshb68d80xw2p6aei3n8lfv1lgda9w6paci2optwho9ggpftqvc6vx91svakcgrreq7xn2l5ejbxwsrjkzhjw34mt86kq383epbhodpvn27d3p65f6tim6yws8od9bhcyi2bp8ljhjyqghjyj4afywnovww8nzx57ya5nezmwlcfoxi5vjs7dh1pt0qlxr57vxelm3ee7ex731qp3rb8iy7hiu5nl8y1r3albdjct7utharwk5y38zv5klxv16bp3hag11ustqaouswlnct3uuc4btguwtlbtcln170kjdi3dbjlfepeqoozvlw4r5llcth7ulo4o786ffcla54rd0qbd6rdibyjnfunty98vpwcjz0zny4r3ix2wbydx7ywat9cunya2xjmp2rdy55kxa6x55hgq7zb67c59fo7mkrw0j8c8swapwwd0enoh3rna84n9b7753t4m4n6n2m41bdk4mgtxo8pvdi7a4d0qsozm5u2p872c8z6qtg2eep0x30d3r2rebyget9stl0k29l0xj1jd1mwr0lr6yo6c0uvufqg41out31vricbf0ut1htsjl412lbjcfy6x08ztfyk0tlmfpa3rcdsa5kz9jpzol6kp1z5rt36smueizjprbzyki6kqyfxmbl05uwywra29h39mxrlkndfxxqtdg1u704f20w4ty8g2ypb62biij1kmupzqlpsegcg7ilp9met31azfv9w8d0rlnvnemvn3ud56p1ej1w1h4ek37eg0wkziiozr05o8jdn6yp2yneb301997ebfjdn1px0cskrqa5iowt3ntntwtei0alurmqhonqkta56zbwdsfurdk11qe0mjrlwepm7i1het7rbi9b7i1y509s2conzihmshjq24y5fn64exolpps4xqhe2w50hirtlndfe6ym4dzfl83kf0vl7atohiikher1rlnbnh2qauzd5sca3urwm6wn5vo3w5nowbxvdq85hecrmiwtwacrrrz3j218simrxb3acj097yzgrmpjuckci5o2y5u9qnpip7mwepsjf3o2a3oqcs43new604j3xeagfpakojrps5rbt45sqwryzome64fw2lqedvthj3bl51pv2gfdxflmtobdvk9fjog5y
          </div>
          {!isMobile && (
            <svg viewBox="0 0 125 40">
              <text fill="#fff" x="0" y="10" fontSize={7}>
                Oh hey it's
              </text>
              <text fill="#ffffff" x="0" y="30" letterSpacing={5}>
                Zach Long
              </text>
            </svg>
          )}
          {isMobile && (
            <svg viewBox="0 0 125 110">
              <text fill="#fff" x="0" y="10" fontSize={7}>
                Oh hey it's
              </text>
              <text fill="#ffffff" x="0" y="50" letterSpacing={5} fontSize={45}>
                Zach
              </text>
              <text fill="#ffffff" x="0" y="90" letterSpacing={5} fontSize={45}>
                Long
              </text>
            </svg>
          )}
          <div className="hero__cta">
            <DownloadButton buttonStyle="btn-primary" to="assets/resume.pdf">
              Download CV
            </DownloadButton>
            <Button buttonStyle="btn-outline" to="#contact">
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
