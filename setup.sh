#!/usr/bin/env bash

i3-msg split h
i3-sensible-terminal -e 'i3-msg split v; i3-sensible-terminal -e "cd ~/soseki/; npm start"; cd ~/soseki/src; clear && tree; bash'
cd ~/soseki/src
clear
