import dotenv from 'dotenv';
dotenv.config();
import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';
import {bcrypt} from 'bcrypt';
import jwt from 'jsonwebtoken';

