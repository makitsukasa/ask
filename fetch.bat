@echo off
@rem anken��(="???? *"�Ɉ�v����t�H���_��)�̈ꗗ���t�@�C���ɏ�������
@set filename=$ask_src\ankens.js
@echo const ankens = [> %filename%
@for /d %%a in ("???? *") do echo     "%%a",>> %filename%
@echo ]>> %filename%
@echo on
