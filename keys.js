const crypto = require("crypto");

const PUBLIC_KEY_HEINRICH = crypto.createPublicKey(`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXDzLstk0oLY2TKY3zxm75NtY1
Oce3O1pPdyF1yyTkHJSIcdseiKPaiaufeHHrwXcA8CCElHdwzWAbdUzfURYTHICD
j8DkEnlWmkthO1vCKpoi5wD2vvCeqpmnXbSd9twEOjM6lGxWB7HqOqmMW2ex2LIq
YMzT4+TfpzPGlHeM9wIDAQAB
-----END PUBLIC KEY-----`);

const PRIVATE_KEY_HEINRICH = crypto.createPrivateKey(`-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQCXDzLstk0oLY2TKY3zxm75NtY1Oce3O1pPdyF1yyTkHJSIcdse
iKPaiaufeHHrwXcA8CCElHdwzWAbdUzfURYTHICDj8DkEnlWmkthO1vCKpoi5wD2
vvCeqpmnXbSd9twEOjM6lGxWB7HqOqmMW2ex2LIqYMzT4+TfpzPGlHeM9wIDAQAB
AoGAOm2Zj++PdnvwJ7zJ+EGHiQOJ5Tp9IkVl0BjPK2Ww1j6rwP7w9yV44z2e0Wbg
AYVqR0WZ/k4CyPHXO6eqXTJa69rMBATMCB7MysEVgkWMnJoMGzXlFuI0hcL2vEcn
L8DXEuxDNsTjqRuCV/ohek0u8kMEBeaA4/j5CNV8U1xOVOkCQQD6/eyIlN/Wm97B
qBP9AqnUd7Iq8nu46LKevwZFmmUO3X/BA0dAQwz6hqiCD+Ejy4CIHLeyvafp+G3W
80cd1EJ7AkEAmhLQ3fJ+TWhx+t7z+k1Rbf3J1pVqcCCLNkZkuS1UoLT9KdFXs6xm
o80mL7atzlXg96Yh5H69rRmuFtpByt3ktQJAVDaAd28kD1irC+T+F+Ud4Fjs4bYM
RwVkcRj83Lup7qvo4nTcIjadEy29Oi5jxuPP01t3UzSJM1qUWAu2L875IwJASzAP
eaBS/pePt+uBiI6exFxrWSqFTL608QGdObjjaaGpQfUFJYtmc10z22j8nIrQREpw
k7899PFpQYG1RbjPWQJAbJCUv4iQpYHUKn0BU13mi6b4sPAONosqlwUYwOdYULgz
vgQC3u2mwiWf8OIZbsuGyoBnVXyGLLVP+l+W9TzcXQ==
-----END RSA PRIVATE KEY-----`);

const PUBLIC_KEY_PAVEL = crypto.createPublicKey(`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCK5o+WeeSnnoI9H9MjlbDkpv79
vL8vnFuhS2D8ZGdBtKc/E8RA8IYqP3Rd0+dC47CDj56X827W5/MA6M8a65J6BCrZ
hGfn4v4t8G/xqrH3JAaYNSuI+MWCEwGfIfuiiphUemCR+yVMlRvArUJTKd61GimO
c3msFWr0U0ARz+rh6QIDAQAB
-----END PUBLIC KEY-----`);

const PRIVATE_KEY_PAVEL = crypto.createPrivateKey(`-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQCK5o+WeeSnnoI9H9MjlbDkpv79vL8vnFuhS2D8ZGdBtKc/E8RA
8IYqP3Rd0+dC47CDj56X827W5/MA6M8a65J6BCrZhGfn4v4t8G/xqrH3JAaYNSuI
+MWCEwGfIfuiiphUemCR+yVMlRvArUJTKd61GimOc3msFWr0U0ARz+rh6QIDAQAB
AoGASla5NHzKTpd79sDInLvpr4Zc5GoXHKEfPUT9hDcsODM6a3zlxSe1dnj9i5X0
qIz5lH/SDlr/0E7VdIAlD7BSdOcOikRGTexrN3d7sWvJk1ZtX8IjmIAES5APfez4
z+cPrvMCy767AKIhXMtf6CBpNRwFIMLcfIUDqbVVEKx7A30CQQDHJiKacOqA4fHq
PSoAnxGy0/ssp14PiWKpCGFJ5Jxy2053DPECli0Pd124HpDQ1tZevJUPbZmJlX9n
30fc2JN/AkEAso11ppn3k1awrj+ec+OBV1r1fxSHuTYVHsozsDRqlrVpMk9Wxr9m
qTVeDge+SZO67jyz2XGucQ+hAraoSp0elwJAb7HG1KIiFFklSoA1j5Wn4omcJYZV
bhda+30Uu9H5oT25O3JJtm6uJS+Io9yY0li8cPQKElYhOBZeF88WSho6VwJAME1G
U4B5Uhl0iF7bfZxBBCGuIeeq47a2tfKbUwKLByQiRiLiZbenjQTL4d3EY2Ecg5BW
Uu+G8jz5IKPLGQwyFwJAY2PhK/gBqbxx1bopYXYdahEijFULnW1WzdzNyRZ+OoR4
1SLX5O3b2E968bjyk+W/xty8Vfvx8PiiIhilU+2KnQ==
-----END RSA PRIVATE KEY-----`);

module.exports = {
    PUBLIC_KEY_HEINRICH,
    PRIVATE_KEY_HEINRICH,
    PUBLIC_KEY_PAVEL,
    PRIVATE_KEY_PAVEL
};