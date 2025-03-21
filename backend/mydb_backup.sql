PGDMP      "    	            }            mydb    17.4    17.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false                        0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            !           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            "           1262    16813    mydb    DATABASE     j   CREATE DATABASE mydb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en-US';
    DROP DATABASE mydb;
                     postgres    false            �            1259    16816    products    TABLE       CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    price numeric(10,2) NOT NULL,
    image_url text,
    created_at timestamp without time zone DEFAULT now(),
    image_urls text[]
);
    DROP TABLE public.products;
       public         heap r       postgres    false            �            1259    16815    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public               postgres    false    218            #           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public               postgres    false    217            �           2604    16819    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    217    218    218                      0    16816    products 
   TABLE DATA           c   COPY public.products (id, name, description, price, image_url, created_at, image_urls) FROM stdin;
    public               postgres    false    218   D       $           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 10, true);
          public               postgres    false    217            �           2606    16824    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public                 postgres    false    218               �  x��V�n�F>�O1 1���͎m5E�u�E.+r%n���K���i�P���ǜ{���h�3K[1�碀9����|�лj����\+x�l�x�o�0��5��cwR��n���6���f��Qr�Bupr���������|�B�jm`��n���[����k&�Xe�FX�l!9��@t+j�Ju�,��m;e�RT�v4�W�A���d�b�y�I�A�IZ���g^D�4��aa|����8��{��Q�Wj&�^	�%7Ι^�����wHo�����iź�K:��C�x^X0�%P���䴒XF]��s�Mf-�;�b�]��~ϪazE뚡�Rղ5��z��H ,��v0��6\#x�~|ap|�E��9a����r����\�=i���S֭���Q w�%3v�?j��X�e֩v'w�7�B9]	J��@,�R>�L�˫S �H�$�Ih�F�V�W0��eW��;�ˋ�<�9O����ԏ��S�x3)j�%���T�|�XKx.q�����_��8��W�WcUKU���`,.�5[�g?������R���7��};�?�-}2� 7b�!+��$_�-m�	d��Ң���||�qz|qf~�<�^J�ٕZZ��B+^(��\�
�כz��v,ZRQ�F�q(-�lH4'8��8����FԄI�V�����	3L��>�j�p]�j��[)I.�����0�}%Q��o���,$�Gq�dDC�}����d��3�d�.�~dze�$���R�2ѹ�4�s9������}��u-\��)���0�5"#|$��Rr�>JƗ>���V��� *��M�e��vɇs�yv����}��1�B�'IP����֪epn�@�^	gb�D�k���HC�j�;�;Fu(O}W1B�c��U)۸tܯ��4 �-. ��>\��: �h��?��y��h>�ݛF�kWe[e��3�1�(Ͳ�4đ��e�9
O�k1����;����n���p(n�����o�t����Ɖ�r&�b��h<̀�+��EPKa;2��-J��A�"�;�b��{� B�.L,$�xhT��&q�Ӄ��<������σ$����' �(L����xQ�\�5���k�/���H>�b��D�EdaB�_�GGG� ��[/     